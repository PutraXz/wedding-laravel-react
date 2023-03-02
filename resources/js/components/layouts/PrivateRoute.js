import React from "react";
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ element: Element, ...props }) {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
    if (!isLoggedIn) {
      return <Navigate to="/" replace />;
    }
  
    return <Route element={<Element />} {...props} />;
}

export default PrivateRoute;