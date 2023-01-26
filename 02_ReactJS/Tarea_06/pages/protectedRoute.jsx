import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, isLogged }) => {
    if (!isLogged) {
        return <Navigate to='/login' />
    } else {
        return children;
    }
}

export default ProtectedRoute;
