'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');
const cors = require('express-cors');

const emailConfig = require('./config/' + process.env.NODE_ENV);

// const generator = require('xoauth2').createXOAuth2Generator({
//   user: "bernie.trinh26@gmail.com", // Your gmail address.
//   clientId: "908190043222-r9e2j9dv82plfcm64b0kg9rrebn6db1k.apps.googleusercontent.com",
//   clientSecret: "54-N2xQnHdgAerJjmEgTPeIw",
//   refreshToken: "1/7ltFzOYrIVMJYWOYqGAXc2fTUZHbrxj7FZ5eBFCA6ds",
//   scope: 'https://mail.google.com/'
// });

const transporter = nodemailer.createTransport('smtps://bernie.trinh26%40gmail.com:V598gfk!@smtp.gmail.com');

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({extended: true})); // parse application/x-www-form-urlencoded
app.use(cookieParser());

app.use(cors({
  allowedOrigins: [emailConfig.cors]
}));


// routes ================================================
app.get('/api/ping', (req, res) => {
  res.json({success: true});
});

app.post('/api/inquiry', (req, res) => {
  const customerInfo = req.body;
  const {name, phoneNumber, email, comments, service}  = customerInfo;

  let mailOptions = {
    from: emailConfig.auth.user,
    to: emailConfig.toAddress,
    subject: 'New inquiry from ' + name,
    html: '<p><b>E-mail: </b>' + email + '</p>' +
    '<p><b>Name: </b>' + name + '</p>' +
    '<p><b>Phone number: </b>' + phoneNumber + '</p>' +
    '<p><b>For service: </b>' + service + '</p>' +
    '<p><b>Inquiry: </b>' + comments + '</p>'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(`Error sending email to ${email}`, error);
      return res.sendStatus(400);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    res.json({success: true});

    transporter.close();
  });


});
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Sunny email server listening on port ${port}!`);
});


module.exports = app;