const express = require('express');
const Router = express.Router();
const CryptoJS = require("crypto-js");
const connection = require('./dbconnection');


Router.post('/',(req,res) => {
    const email =req.body.email;
    const password = req.body.password;
    
    // Check if the email and password exists in the database
    

   // const query = `SELECT * FROM employee WHERE Lower(email) = ?`;
   const query = `SELECT * FROM employee INNER JOIN user ON employee.email = user.email WHERE employee.email = ?`;
    connection.query(query,[email], (error, results) => {


      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
      }
      console.log('Query results:', results);
    if (results.length > 0) {
        //return res.status(400).json({ error: 'Email already has an account' });
            const user = results[0];
            if (!user.is_verified) {
                return res.status(403).json({ error: 'Email not verified' });
            }
        const hashedpassword = results[0].password;
        const salt = results[0].salt;
        const saltedpassword = salt + password; // Add the salt to the provided password
    const encryptedpassword = CryptoJS.SHA256(saltedpassword).toString(); // Hash the salted password
    const ispasswordMatch = encryptedpassword === hashedpassword;
        if (ispasswordMatch) {
          console.log('Login successful!');
        //  return res.status(200).json({ message: 'Successfully Logging In' });
        const insertQuery =`INSERT INTO login_updates (email, login_time) VALUES (?, CURRENT_TIMESTAMP) ON DUPLICATE KEY UPDATE login_time = CURRENT_TIMESTAMP`;
      connection.query(insertQuery, [email], (insertError) => {
        if (insertError) {
            console.error('Error inserting login time:', insertError);
            return res.status(500).json({ error: 'Failed to insert login time.' });
        }
        console.log('Login time inserted successfully.');
        return res.status(200).json({ message: 'Successfully Logging In' });
    });
    
        } else {
          console.log('Invalid email or password');
          return res.status(600).json({ error: 'Invalid email or password' });
          
        }
      }
      else{
        console.log('Invalid email or password');
        return res.status(400).json({ error: 'Invalid email or password' });
        
      }
    
    });
  
  });
  module.exports = Router;