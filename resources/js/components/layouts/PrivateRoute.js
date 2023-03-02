import React from "react";
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ ...props }) {
    const isLoggedIn = localStorage.getItem('status') === "LoggedIn";
  
    if (!isLoggedIn) return <Navigate to="/login" replace />;
    return props.children;
};

export default PrivateRoute;