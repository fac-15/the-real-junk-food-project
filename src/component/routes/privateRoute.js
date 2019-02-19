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
      //Makes sure that a logged in driver can't access supplier page
      `/${checkToken().userRole}` === path ? (
        <Component {...props} />
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
