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

const mailer = async (message) => {
  try {
    return await transporter.sendMail(message)
  } catch (error) {
    throw error
  }
}

module.exports = mailer;
