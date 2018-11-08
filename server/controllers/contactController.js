const nodemailer = require('nodemailer');
require('dotenv').config();
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

exports.contact_me = function(req, res) {
  console.log(req.body);
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.SENDER_EMAIL,
    subject: 'MSG From ur profile site',
    html: `
      <p>${req.body.email}</p><br/>
      <p>${req.body.request}</p>
    `
  };
  transporter.sendMail(mailOptions, function(err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  return res.status(200).send({ msg: 'Message Sent' });
};
