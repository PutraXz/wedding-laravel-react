import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Authorization = (WrappedComponent, allowedRoles) => {
  const WithAuthorization = ({ level, ...props }) => {
    const navigate = useNavigate();

    React.useEffect(() => {
      if (!allowedRoles.includes(level)) {
        navigate("/unauthorized");
      }
    }, [level, navigate, allowedRoles]);

    return <WrappedComponent {...props} />;
  };

  const mapStateToProps = (state) => ({ level: state.login.level });
  return connect(mapStateToProps)(WithAuthorization);
};

export default Authorization;
