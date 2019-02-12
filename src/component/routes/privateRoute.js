import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

const PrivateRoute = ({ authed: authed, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authed ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
