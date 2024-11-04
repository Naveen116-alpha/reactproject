// src/components/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import imagefile from './photo-1503676260728-1c00da094a0b.jpeg';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        navigate('/home'); // Redirect to Home
    };

    return (
        <div className="login-container">
            <div 
                className="background-image" 
                style={{ backgroundImage: `url(${imagefile})` }}
            ></div>
            <div className="login-form">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account? <a href="/register">Register here</a></p>
            </div>
        </div>
    );
};

export default Login;
