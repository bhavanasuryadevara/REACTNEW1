const express = require('express');
const Router = express.Router();
const nodemailer = require('nodemailer');
const crypto = require('crypto');

// In-memory store for OTPs
const otps = {};

// Configure Nodemailer gen otp
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'suryadevarabhavana@gmail.com',
    pass: 'houx pkfx glxu ucuv',
  }
});

// Route to send OTP
Router.post('/', (req, res) => {
  const { email } = req.body;
  const otp = crypto.randomInt(100000, 999999).toString().padStart(6, '0'); // Ensure OTP is 6 digits

  // Store OTP in memory

  otps[email] = otp;
  module.exports.variable = otps[email];


  const mailOptions = {
    from: 'suryadevarabhavana@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending OTP:', error);
      return res.status(500).json({ message: 'Failed to send OTP' });
    }
    console.log('OTP sent:', info.response);
    res.json({ message: 'OTP sent successfully' });
  });
});

module.exports = Router;


