import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './logincss.css'; // Assuming you have a CSS file for styling

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/Login', {
                email: email,
                password: password
            });

            if (response.status === 200) {
                console.log(response.data.message);
                setTimeout(() => navigate('/Table'), 1000); //login
            } else {
                throw new Error('Error: ' + response.status);
            }
        } catch (error) {
            console.error(error);
            if (error.response?.status === 400 || error.response?.status === 600) {
                setError('Invalid UserName or Password');
            }
        }
    };

    return (
        <div className="login1-container">
            <div className="text-container">
                <h1>Bring home beautiful interiors <span className="highlight">that fit your budget</span></h1>
                <p>Experience unmatched quality & timely delivery with Livspace</p>
            </div>
            <div className="container">
                <input type="checkbox" id="check" />
                <div className="login form">
                    <header>Login</header>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <a href="/">Forgot password?</a>
                        <input type="submit" className="button" value="Login" />
                        {error && <p className="error">{error}</p>}
                    </form>
                    <div className="signup">
                        <span className="signup">Don't have an account? <Link to="/Signup">Signup</Link></span>
                    </div>
                </div>
            </div>
        </div>

        
    );
};

export default Login;
       