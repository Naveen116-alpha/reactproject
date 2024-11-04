// src/components/Register.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import imagefile from './photo-1503676260728-1c00da094a0b.jpeg';

function Register() {
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        navigate('/'); // Redirect to Home
    };

    return (
        <div className="register-container">
            <div 
                className="background-image" 
                style={{ backgroundImage: `url(${imagefile})` }}
            ></div>
            <div className="register-form">
                <h1>Register</h1>
                <form onSubmit={handleRegister}>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="number" placeholder="Age" required />
                    <input type="text" placeholder="Phone Number" required />
                    <input type="text" placeholder="College" required />
                    <input type="password" placeholder="Password" required />
                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
