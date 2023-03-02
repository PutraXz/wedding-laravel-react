import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './layouts/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './layouts/PrivateRoute';
function MyApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <PrivateRoute path='/dashboard' element={<Dashboard />}/>
                <Route path='*' element={<h1>404 Page not found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(<MyApp />, document.getElementById('app'));
}