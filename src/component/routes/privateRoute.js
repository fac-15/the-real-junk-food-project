import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import decode from "jwt-decode";

const checkToken = () => {
  console.log(decode(localStorage.getItem("id_token")));
  return localStorage.getItem("id_token");
};

const PrivateRoute = ({ component: Component, details: details }) => (
  <Route
    render={props =>
      checkToken() ? (
        <Component {...props} details={details} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
