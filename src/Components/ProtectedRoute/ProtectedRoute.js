import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from '../Redux/authenticationSlice';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const location = useLocation();

    return isLoggedIn ? (
        <Component {...rest} />
    ) : (
        <Navigate to='/login' state={{ from: location, message: 'Please log in to access this page.' }} />
    );
};

export default ProtectedRoute;
