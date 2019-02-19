import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import decode from "jwt-decode";

const PrivateRoute = ({
  component: Component,
  checkToken: checkToken,
  path: path
}) => (
  <Route
    render={props =>
      `/${checkToken().userRole}` === path ? (
        <Component {...props} checkToken={checkToken} />
      ) : (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
