const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.mail.ru',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'rainland-96@mail.ru',
        pass: 'XAL9C7aCWbCkmLhGcigh'
    }
  },
  {
    from: 'Mailer Test <rainland-96@mail.ru>',
  }
)

const mailer = message => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log('Email sent: ', info);
  });
}

module.exports = mailer;
