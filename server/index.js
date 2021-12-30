const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
const mailer = require('./nodemailer');

const root = './';
const port = process.env.PORT || '3000';
const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
app.use(urlencodedParser);
app.use(express.static(path.join(root, 'dist/mailer-tester')));
app.use('/api', routes);

app.get('*', (req, res) => {
  res.sendFile('dist/mailer-tester/index.html', {root});
});

app.post('/', async (req, res) => {
  if (!req.body) { return res.sendStatus(400) }
  if (req.body.registrationFillName !== null) { return res.sendStatus(200) }
  const message = {
    to: req.body.registrationEmail,
    subject: 'New request for PARTY!',
    html: `
    <h2>Новая заявка, друже!</h2>
    <ul>
      <li><b>Отправлено из формы: ${req.body.formName}</b></li>
      <li>Имя: ${req.body.registrationFirstName}</li>
      <li>Фамилия: ${req.body.registrationLastName}</li>
      <li>E-mail: ${req.body.registrationEmail}</li>
      <li>Телефон: ${req.body.registrationPhone}</li>
    </ul>`
  }

  try {
    const temp = await mailer(message)
    res.send(temp.responseCode);
  } catch (error) {
    res.sendStatus(error.responseCode)
  }

});

app.listen(port, () => console.log(`API running on http://localhost:${port}`));
