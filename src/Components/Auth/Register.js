import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../utils/fetchData';

import styles from './styles.module.css';

const Register = () => {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage(''); 
        register(name, email, password)
            .then(response => {
                if(response.status === 201) {
                    navigate('/login');
                    setName('');
                    setEmail('');
                    setPassword('');
                }
            })
            .catch(error => {
                setErrorMessage(error.response.data.msg || 'An error occurred during registration');
            });
    };

    return (
        <>
            <div className={styles.container}>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        name='name'
                        autoComplete='name'
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                    </div>
                    <div className={styles.formGroup}>
                    <label htmlFor='username'>Email:</label>
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
                        autoComplete='new-password'
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    </div>
                    <button type='submit'>Sign Up</button>
                    <p>
                        Already have an account?{' '}
                        <Link to='/login'>Sign in here</Link>
                    </p>
                    {errorMessage && (
                        <p className={styles.errorMessage}>Error: {errorMessage}</p>
                    )}
                </form>
            </div>
        </>
    );
};

export default Register;

