import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

const PublicRoute = ({ component: Component, checkToken: checkToken }) => (
  <Route render={props => <Component checkToken={checkToken} {...props} />} />
);

export default PublicRoute;
