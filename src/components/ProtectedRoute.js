import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const ProtectedRoute = (props) => {
    const {user} = UserAuth();

    if (!user) {
        return <Navigate to="/" />
    }
    else {
        return props.children;
    }
}

export default ProtectedRoute;