import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

const PrivateRoute = ({ component: Component, details: details }) => (
  <Route
    render={props =>
      details.isAuthenticated ? (
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
