const express = require('express');
const Router = express.Router();
var variables = require('./Emailgenotp');


Router.post('/', (req, res) => {
  const { email, otp } = req.body;
  console.log("Received OTP verification request for email:", email, "with OTP:", otp);
  const storedOtp = variables.variable;

  if (storedOtp == otp) {
  
    res.json({ message: 'OTP verified successfully' });
  } else {
    res.status(400).json({ message: 'Invalid OTP' });
  }
});

module.exports = Router;