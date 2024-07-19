const express = require('express');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const connection = require('./dbconnection');

//database connection




//email verification

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'suryadevarabhavana@gmail.com',
        pass: 'houx pkfx glxu ucuv',

    },
  });
  const sendVerificationEmail = async (email) => {
    const secretKey = 'mySecretKey'; // Replace with your actual secret key
    const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
    const verificationUrl = `http://localhost:5000/verify?token=${token}`;
     
    // save the token to the database
    //const sql = `INSERT INTO user (email, Token ) VALUES(?,?)`;
    const sql = `INSERT INTO user (email, token, is_verified) VALUES (?, ?, false) ON DUPLICATE KEY UPDATE token = VALUES(token), is_verified = VALUES(is_verified)`;

    connection.query(sql,[email,token], (err) => {
      if (err) {
        console.error('Error saving user data:', err);
        
      }
      console.log('User data saved successfully:');
    
  });
  
  
  
    const mailOptions = {
      from: 'suryadevarabhavana@gmail.com',
      to: email,
      subject: 'Verify your email address',
      html: `<p>Please click on the following link to verify your email address:</p>
             <a href="${verificationUrl}">${verificationUrl}</a>`,
    };
  
    await transporter.sendMail(mailOptions);
  };

  module.exports = sendVerificationEmail;