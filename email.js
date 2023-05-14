var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hassaanadil488@gmail.com',
    pass: 'hassaan416'
  }
});

var mailOptions = {
  from: 'hassaanadil488@gmail.com',
  to: 'hassaanadil56@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});