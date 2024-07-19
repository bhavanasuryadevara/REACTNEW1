const express = require('express');
const Router = express.Router();
const ForgetPasswordEmail = require('./Forget');

Router.post('/', async (req, res) => {
    const  email  = req.body.email;
    await ForgetPasswordEmail(email);
    res.json({ message: 'Reset password email sent' });
    
  });

  module.exports=Router;