const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const otpStore = require('./Otpverification');

// Create MySQL connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bj@1997",
    database: "employees"
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

router.post('/', (req, res) => {
    const { Email, otp, newPassword } = req.body;
    console.log(Email, newPassword);
    const storedOTP = otpStore[Email];
    if (!storedOTP || storedOTP !== otp) {
        return res.status(400).json({ message: 'Invalid OTP.' });
    }

    
    delete otpStore[Email];

    
    const sql = 'UPDATE employee SET Password = ?  WHERE Email = ?';
    connection.query(sql, [newPassword, Email], (error, results) => {
      if (error) {
        console.error('Error updating password in MySQL:', error);
        res.status(500).json({ message: 'Failed to reset password.' });
      } else {
        console.log('Password updated successfully');
        res.status(200).json({ message: 'Password reset successful.' });
      }
    });
    
});

module.exports = router;
