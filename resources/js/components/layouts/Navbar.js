import React from "react";

class Navbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: localStorage.getItem("status") === 'LoggedIn'
        };
    }
    logout = () => {
        localStorage.removeItem("status");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        this.setState({isLoggedIn: false});
    };

    render(){
        const { isLoggedIn } = this.state;

        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toogle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse"  id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                        {
                            isLoggedIn
                            ? 
                            <button className="nav-link btn btn-primary" onClickCapture={this.logout}>Logout</button>
                            : 
                            <>
                             <a className="nav-link" href="/login">Login</a>
                             <a className="nav-link" href="/register">Register</a>
                            </>
                        } 
                        </div>
                    </div>
                </div>
            </nav>
        );
    };
};

export default Navbar;
