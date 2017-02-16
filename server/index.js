'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');

const emailConfig = require('./config/mail');

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(cookieParser());

let transporter = nodemailer.createTransport(emailConfig);

// routes ================================================
app.post('/api/inquiry', function (req, res) {

  const customerInfo = req.body;
  let subjectName = customerInfo.firstName || customerInfo.email || 'new potential customer';
  const inquiry = customerInfo.inquiry || 'The user did not leave an inquiry.';
  const email = customerInfo.email || '';
  const phoneNumber = customerInfo.phoneNumber || '';
  const lastName = customerInfo.lastName || '';
  let name = customerInfo.firstName || '' + ' ' + lastName;


  let mailOptions = {
    from: emailConfig.auth.user,
    to: emailConfig.toAddress, // TODO: replace with correct email(s)
    subject: 'New inquiry from ' + subjectName,
    html: '<p><b>E-mail: </b>' + email + '</p>' +
      '<p><b>Name: </b>' + name + '</p>' +
      '<p><b>Phone number: </b>' + phoneNumber + '</p>' +
      '<p><b>Inquiry: </b>' + inquiry + '</p>'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    res.sendStatus(200);

  });


});

app.listen(8080, function () {
  console.log(`Example app listening on port 8080!`);

});


module.exports = app;