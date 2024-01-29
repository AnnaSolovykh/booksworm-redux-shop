import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from '../Redux/authenticationSlice';
import { login } from '../../utils/fetchData';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password)
            .then(response => {
                if(response.status === 200) {
                    sessionStorage.setItem("jwtToken", response.data.token);
                    sessionStorage.setItem("username", response.data.user.name);
                    dispatch(setUser());
                    navigate('/favorite-books');
                    setEmail('');
                    setPassword('');
                }
            })
            .catch(error => {
                console.log(error)
            })
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Log In</button>
                <p>
                    Don't have an account?{' '}
                    <Link to="/register">Register here</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
