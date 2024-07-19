import React, { useState } from 'react';
import Axios from 'axios';

function ForgotPassword() {
    const [Email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post('http://localhost:5000/forgot-password', { Email });
            if (response.status === 200) {
                setMessage('OTP sent to your email.');
            }
        } catch (error) {
            console.error(error);
            setMessage('Failed to send OTP.');
        }
    };

    return (
        <div>
            <h1>Forgot Password</h1>
            <form onSubmit={handleForgotPassword}>
                <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
                <button type="submit">Send OTP</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
}

export default ForgotPassword;
