import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    let location = useLocation();

    const { user } = useSelector(state => (state));

    return user.username ? children : <Navigate to='/login' state={{ from: location }} />
};

export default PrivateRoute;