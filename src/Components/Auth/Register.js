import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { useNavigate } from "react-router-dom";
import { register } from '../../utils/fetchData';

const Register = () => {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        register(name, email, password)
            .then(response => {
                if(response.status === 201) {
                    sessionStorage.setItem("jwtToken", response.data.token);
                    sessionStorage.setItem("username", response.data.user.name);
                    navigate('/favorite-books');
                    setName('');
                    setEmail('');
                    setPassword('');
                }
            })
            .catch(error => {
                console.log(error)
            })

        /*try {
            const response = await register(name, email, password);
            console.log(response.data);
        } catch (error) {
            console.error("Error logging in:", error);
        }
        */
    };

    return (
        <div className="login-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                    required
                />
                </div>
                <div className="form-group">
                <label htmlFor="username">Email:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                </div>
                <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                </div>
                <button type="submit">Sign Up</button>
                <p>
                    Already have an account?{' '}
                    <Link to="/login">Sign in here</Link>
                </p>
            </form>
        </div>
    );
}

export default Register;

