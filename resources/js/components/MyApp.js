import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './layouts/Login';
import { PrivateRoute } from './layouts/PrivateRoute';
import {
  AdminDashboardAuthorized,
  UserDashboardAuthorized,
  UnauthorizedAuthorized,
} from "./layouts/AuthorizedRoutes";

function MyApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <PrivateRoute path='/admin' element={AdminDashboardAuthorized} />
                <Route path='*' element={<h1>404 Page not found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(<MyApp />, document.getElementById('app'));
}
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
