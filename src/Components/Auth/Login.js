import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { setUser } from '../Redux/authenticationSlice';
import { login } from '../../utils/fetchData';

import styles from './styles.module.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); 

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('');
        login(email, password)
            .then(response => {
                if (response.status === 200) {
                    sessionStorage.setItem('jwtToken', response.data.token);
                    dispatch(setUser(response.data.user));
                    navigate('/');
                    setEmail('');
                    setPassword('');
                }
            })
            .catch(error => {
                setErrorMessage(error.response.data.msg || 'An error occurred during login');
            });
    };

    return (
        <>
            <div className={styles.container}> 
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}> 
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='text'
                            name='email'
                            autoComplete='email'
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor='password'>Password:</label>
                        <input
                            type='password'
                            name='password'
                            autoComplete='current-password'
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <button type='submit'>Log In</button>
                    <p>
                        Don't have an account?{' '}
                        <Link to='/register'>Register here</Link>
                    </p>
                    {errorMessage && (
                        <p className={styles.errorMessage}>Error: {errorMessage}</p> 
                    )}
                </form>
            </div>
        </>
    );
};

export default Login;
