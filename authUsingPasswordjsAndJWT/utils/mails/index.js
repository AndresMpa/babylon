const nodemailer = require('nodemailer');

async function sendMail() {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true,
    port: 465,
    auth: {
      user: 'fancy@mail.com',
      pass: '....',
    },
  });

  let info = await transporter.sendMail({
    from: 'fancy@mail.com',
    to: 'fancy@mail.com',
    subject: 'Sending amazing messages',
    text: 'Hello gmail',
    html: '<b>Hello world?</b>',
  });

  console.log('Message sent: %s', info.messageId);
}

module.exports = { sendMail };
