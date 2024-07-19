import React, { useState } from 'react';
import Axios from 'axios';

function ResetPassword() {
    const [Email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post('http://localhost:5000/reset-password', { Email, otp, newPassword });
            if (response.status === 200) {
                setMessage('Password reset successful.');
            }
        } catch (error) {
            console.error(error);
            setMessage('Failed to reset password.');
        }
    };

    return (
        <div className='container align-center '>
            <h1>Reset Password</h1>
            <form onSubmit={handleResetPassword}>
                <p>Type Your Email</p> 
                <input type="Email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" required /><br/>
                <p>Enter Your OTP</p>
                <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" required /><br/>
                <p>Type your new password</p>
                <input type="Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Enter new password" required /><br/>
                <button type="submit">Reset Password</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
}

export default ResetPassword;
