import React, { useState } from 'react';
import './signup.css';
import CryptoJS from 'crypto-js';
import axios from 'axios';
import DOMPurify from 'dompurify';

const SignupForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // Handle signup logic here
  };

  return (
    <div className="signup-container"> {/* Updated class name */}
      <header>Signup</header>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input type="submit" className="button" value="Signup" />
      </form>
      <div className="signup">
        <span>Already have an account? <a href="/login">Login</a></span>
      </div>
    </div>
  );
};

export default SignupForm;
