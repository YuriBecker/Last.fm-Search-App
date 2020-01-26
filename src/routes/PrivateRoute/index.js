import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading } from '../../screens';

const PrivateRoute = ({ component: Component, isAuthenticated, isVerifying, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (isAuthenticated) return <Component {...props} />;
      if (isVerifying) return <Loading />;
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      );
    }}
  />
);

export default PrivateRoute;

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isVerifying: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
