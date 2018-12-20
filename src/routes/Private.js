import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../utils';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  /*
   * This component checks if a user is allowed to access a certain route
   * Props: path: string: url path
   *        component: React Component
   *  Usage: <PrivateRoute
                path={prop.path}
                component={prop.component}
              />
   * */
  <Route
    {...rest}
    render={props => (isLoggedIn() ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
    ))
        }
  />
);

export default PrivateRoute;
