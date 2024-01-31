import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../utils/fetchData'; 
import { removeUser } from '../Redux/authenticationSlice';

import styles from './styles.module.css';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout()
            .then(response => {
                dispatch(removeUser());
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className={styles.logoutBtnWrapper}>
            <p className={styles.logoutBtn} onClick={handleLogout}>LOGOUT</p>
        </div>
    );
};

export default Logout;
