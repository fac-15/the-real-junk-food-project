import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import decode from "jwt-decode";

//checks that a jwt with the right id exists
const checkToken = () => {
  return localStorage.getItem("id_token");
};

//checks that the role in state is the same as the role in the jwt
const checkRole = role => {
  const decodedRole = decode(localStorage.getItem("id_token")).userRole;
  return decodedRole === role;
};

const PrivateRoute = ({ component: Component, details: details }) => (
  <Route
    render={props =>
      checkToken() && checkRole(details.userRole) ? (
        <Component {...props} details={details} />
      ) : (
        <Redirect
          to={{
            pathname: "/form",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
