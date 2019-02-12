import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

const PublicRoute = ({ isAuth: isAuth, component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component isAuth={isAuth} {...props} />} />
);

export default PublicRoute;
