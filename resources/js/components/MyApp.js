import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Komponen untuk halaman login
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi login
    if (username === 'admin' && password === 'admin') {
      // Login sebagai admin
      localStorage.setItem('role', 'admin');
      window.location.href = '/admin';
    } else if (username === 'user' && password === 'user') {
      // Login sebagai user
      localStorage.setItem('role', 'user');
      window.location.href = '/user/dashboard';
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {error && <p>Invalid username or password</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

// Komponen untuk halaman dashboard admin
function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome Admin!</p>
      <p>This is the admin dashboard.</p>
    </div>
  );
}

// Komponen untuk halaman dashboard user
function UserDashboard() {
  return (
    <div>
      <h1>User Dashboard</h1>
      <p>Welcome User!</p>
      <p>This is the user dashboard.</p>
    </div>
  );
}

// PrivateRoute komponen
function PrivateRoute({ element: Component, isAuthenticated, ...rest }) {
    return (
      <Route
        {...rest}
        element={isAuthenticated ? (
          <Component />
        ) : (
          <Navigate to="/login" replace />
        )}
      />
    );
  }

// Komponen untuk halaman tidak diizinkan
function Unauthorized() {
  return (
    <div>
      <h1>Unauthorized Access</h1>
      <p>You are not authorized to access this page.</p>
    </div>
  );
}

// MyApp komponen
function MyApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <PrivateRoute
            path="/admin"
            element={<AdminDashboard />}
            isAuthenticated={isLoggedIn && userRole === 'admin'}
            />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<h1>404 Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<MyApp />, document.getElementById('app'));
// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Login from "./layouts/Login";
// import {
//   AdminDashboardAuthorized,
//   UserDashboardAuthorized,
//   UnauthorizedAuthorized,
// } from "./layouts/AuthorizedRoutes";
// import { PrivateRoute } from "./layouts/PrivateRoute";
// function MyApp() {
//     return (
//         <Router>
//             <Switch>
//                 <Route exact path="/" component={() => <div>Home</div>} />
//                 <Route exact path="/login" component={Login} />
//                 <PrivateRoute
//                 exact
//                 path="/admin"
//                 component={AdminDashboardAuthorized}
//                 />
//                 <PrivateRoute
//                 exact
//                 path="/user/dashboard"
//                 component={UserDashboardAuthorized}
//                 />
//                 <Route exact path="/unauthorized" component={UnauthorizedAuthorized} />
//                 <Route component={() => <div>404 Not Found</div>} />
//         </Switch>
//     </Router>
//     );
// }

// if (document.getElementById('app')) {
//     ReactDOM.render(<MyApp />, document.getElementById('app'));
// }
