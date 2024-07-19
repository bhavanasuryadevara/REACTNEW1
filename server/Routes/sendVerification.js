const express = require('express');
const Router = express.Router();
const sendVerificationEmail = require('./Email');

Router.post('/', async (req, res) => {
    const  email  = req.body.email;
    await sendVerificationEmail(email);
    res.json({ message: 'Verification email sent' });
  });

  module.exports = Router;