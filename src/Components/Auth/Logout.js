import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../utils/fetchData'; 
import { removeUser } from '../Redux/authenticationSlice';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout()
            .then(response => {
                dispatch(removeUser());
                navigate('/');
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <button onClick={handleLogout}>LOGOUT</button>
        </div>
    );
};

export default Logout;
