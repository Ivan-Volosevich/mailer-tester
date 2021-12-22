const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
const mailer = require('./nodemailer');
const fs = require('fs');

const root = './';
const port = process.env.PORT || '3000';
const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const dataUsers = require('../dist/mailer-tester/assets/data/mocksUsers');
let data = fs.readFileSync("dist/mailer-tester/assets/data/mocksUsers.json");

app.use(bodyParser.json());
app.use(urlencodedParser);
app.use(express.static(path.join(root, 'dist/mailer-tester')));
app.use('/api', routes);

app.get('*', (req, res) => {
  res.sendFile('dist/mailer-tester/index.html', {root});
});

app.post('/api/data/users', (req, res) => {
  if (!req.body) { return res.sendStatus(400) }
  const message = {
    // from: 'Mailer Test <rubye.upton26@ethereal.email>',
    to: req.body.registrationEmail,
    subject: 'New request for PARTY!',
    html: `
    <h2>Новая заявка, друже!</h2>
    <ul>
      <li>Имя: ${req.body.registrationFirstName}</li>
      <li>Фамилия: ${req.body.registrationLastName}</li>
      <li>E-mail: ${req.body.registrationEmail}</li>
      <li>Возраст: ${req.body.registrationAge}</li>
      <li>Телефон: ${req.body.registrationPhone}</li>
    </ul>`
  }
  mailer(message)

  // let newUser = JSON.stringify(req.body);

  // try {
  //   if (fs.existsSync('mocksUsers.json')) {
  //     console.log('data file exist')
  //     dataUsers.push(req.body)
  //     console.log('existsSync: ', dataUsers)

  //     fs.appendFile('mocksUsers.json', newUser, (err) => {
  //       console.log('append: ', newUser)
  //       if (err) {
  //         console.log('Error from routes: ', err);
  //         return err;
  //       }
  //     });

  //   }
  // } catch(err) {
  //   console.error("can't find file", err)
  // }

  res.send(JSON.stringify(req.body));
});

app.listen(port, () => console.log(`API running on http://localhost:${port}`));
