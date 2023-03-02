import React from 'react';
import { Navigate, Route } from 'react-router-dom';

function PrivateRoute({ element: Component, allowedRoles, ...rest }) {
  // contoh implementasi cek user role dari auth context
  const userRole = 'admin';

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return <Route {...rest} element={<Component />} />;
}

export default PrivateRoute;