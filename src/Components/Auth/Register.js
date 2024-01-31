import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../Redux/authenticationSlice';
import { register } from '../../utils/fetchData';

import styles from './styles.module.css';

const Register = () => {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

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
                    sessionStorage.setItem('jwtToken', response.data.token);
                    sessionStorage.setItem('username', response.data.user.name);
                    dispatch(setUser(response.data.user.name));
                    navigate('/favorite-books');
                    setName('');
                    setEmail('');
                    setPassword('');
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className={styles.container}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor='name'>Name:</label>
                <input
                    type='text'
                    id='name'
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
                    id='email'
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
                    id='password'
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
            </form>
        </div>
    );
};

export default Register;

