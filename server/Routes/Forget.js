const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const otpStore = require('./Otpverification');

// Store users' email and their respective OTPs in memory (In real-world scenarios, use a database)

// POST endpoint for initiating the forgot password process
router.post('/', async (req, res) => {
    const { Email } = req.body;
    console.log(Email);
    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore[Email] = otp;

    // Send OTP to the user via email
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'suryadevarabhavana@gmail.com',
                pass: 'houx pkfx glxu ucuv',
            }
        });

        const mailOptions = {
            from: 'suryadevarabhavana@gmail.com',
            to: Email,
            subject: 'Password Reset OTP',
            text:  `Your OTP for password reset is: ${otp}` 
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'OTP sent to your email.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send OTP.' });
    }
});

module.exports = router;








  