const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');

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

app.post('/data/users', (req, res) => {
  if (!req.body) {
    return res.sendStatus(400);
  }
  console.log('eeeeewoweeeeee')
  console.log(req.body)
  res.render('/data/users/mocksUsers.json')
})

app.listen(port, () => console.log(`API running on localhost:${port}`));
