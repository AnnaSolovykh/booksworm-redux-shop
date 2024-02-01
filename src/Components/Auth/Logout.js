import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logout } from '../../utils/fetchData'; 
import { removeUser } from '../Redux/authenticationSlice';

import styles from './styles.module.css';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout()
            .then(() => {
                sessionStorage.removeItem('jwtToken');
                dispatch(removeUser());
                navigate('/');
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
            <div className={styles.logoutBtnWrapper}>
                <p className={styles.logoutBtn} onClick={handleLogout}>LOGOUT</p>
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

export default Logout;
