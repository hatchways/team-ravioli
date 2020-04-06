import React, { useContext } from 'react';
import AuthContext from '../context/auth/authContext';
import { Route, Redirect } from 'react-router-dom';

const SecureRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, token } = authContext;
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !token ? (
          <Redirect to="/signup" />
        ) : (
          <Component {...props} />
        )
      }
    ></Route>
  );
};

export default SecureRoute;
