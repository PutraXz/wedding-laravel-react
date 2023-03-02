import React from 'react';
import axios from 'axios';
import { useNavigate, Navigate} from 'react-router-dom';

const Login = (props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState(null);
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/login', {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data.data));
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('IsLoggedIn', "true");
        setIsLoggedIn(true);
        history('/dashboard')
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  };
    const isLoggedIn = localStorage.getItem('isLoggedIn') === "true";
            if (isLoggedIn) {
                return <Navigate to="/dashboard" />;
            }
  return (
            <div>
                <div className="login-page bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <h3 className="mb-3">Login Now</h3>
                                    <div className="bg-white shadow rounded">
                                        <div className="row">
                                            <div className="col-md-7 pe-0">
                                                <div className="form-left h-100 py-5 px-5">
                                                    <form onSubmit={handleSubmit} className="row g-4" autoComplete="off">
                                                            <div className="col-12">
                                                            <label>
                                                                Username<span className="text-danger">*</span>
                                                            </label>
                                                            <div className="input-group">
                                                                <div className="input-group-text">
                                                                <i className="bi bi-person-fill"></i>
                                                                </div>
                                                                <input
                                                                type="text"
                                                                className="form-control"
                                                                name="email"
                                                                placeholder="Enter Email"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                />
                                                            </div>
                                                            </div>

                                                            <div className="col-12">
                                                            <label>
                                                                Password<span className="text-danger">*</span>
                                                            </label>
                                                            <div className="input-group">
                                                                <div className="input-group-text">
                                                                <i className="bi bi-lock-fill"></i>
                                                                </div>
                                                                <input
                                                                type="password"
                                                                className="form-control"
                                                                name="password" 
                                                                placeholder="Enter Password" 
                                                                value={password} 
                                                                onChange={e => setPassword(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <button type="submit" className="btn btn-primary px-4 float-end mt-4">login</button>
                                                    </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-5 ps-0 d-none d-md-block">
                                        <div className="form-right h-100 bg-primary text-white text-center pt-5">
                                            <i className="bi bi-bootstrap"></i>
                                            <h2 className="fs-1">Welcome Back!!!</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-end text-secondary mt-3">Bootstrap 5 Login Page Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Login;