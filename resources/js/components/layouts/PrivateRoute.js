import React from "react";
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
<Route {...rest} element={
localStorage.getItem('token')
? <Component {...rest} />
: <Redirect to={{ pathname: '/login', state: { from: rest.location } }}/>
} />
);

export default PrivateRoute;