const express = require('express');
const Router = express.Router();
const jwt = require('jsonwebtoken');
const connection = require('./dbconnection');

Router.get('/', async (req, res) => {
    const token = req.query.token;
    try {
      const decodedToken = jwt.verify(token, 'mySecretKey');
      const email = decodedToken.email;

      // update the is_verified field in the database
      const sql = `UPDATE user SET is_verified = true WHERE email = ?`;
      connection.query(sql, [email], (err, result) => {
        if (err) {
          console.error('Error updating user data:', err);
          return res.send({ error: 'Error updating user data' });
        }
        console.log('User data updated successfully:', result);
        res.redirect('http://localhost:3000/verifyEmail');

      });
    } catch (err) {
      console.error('Error verifying email:', err);
      return res.send({ error: 'Error verifying email' });
    }

  });

  module.exports = Router;