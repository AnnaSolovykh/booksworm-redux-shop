import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setUser } from '../Redux/authenticationSlice';
import { login } from '../../utils/fetchData';

import styles from './styles.module.css';

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
                    sessionStorage.setItem('jwtToken', response.data.token);
                    dispatch(setUser(response.data.user));
                    navigate('/favorite-books');
                    setEmail('');
                    setPassword('');
                }
            })
            .catch(error => {
                toast.error(`${error.response.data.msg}`, {
                    position: 'top-right',
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
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
                </form>
            </div>
            <ToastContainer 
                position='top-right'
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
        </>
    );
};

export default Login;
