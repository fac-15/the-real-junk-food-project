import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Logo from "./img/logo.png";
import Form from "./component/form/form.js";
import Driver from "./component/driver/driver.js";
import PrivateRoute from "./component/routes/privateRoute.js";
import PublicRoute from "./component/routes/publicRoute.js";
import Supplier from "./component/supplier/supplier.js";
import decode from "jwt-decode";

class App extends Component {
  state = {
    username: "",
    id: 0,
    userRoleState: ""
  };

  isAuth = data => {
    if (data) {
      this.setState({ name: data.name, ID: data.id });
    } else {
      this.setState({ name: "", ID: 0 });
    }
  };

  //decodes token for auth purposes, or returns false if none exist
  checkToken = () => {
    if (localStorage.getItem("id_token")) {
      const { username, id, userRole } = decode(
        localStorage.getItem("id_token")
      );
      return { username, id, userRole };
    } else {
      console.log("No token exists with that ID");
      return false;
    }
  };

  render() {
    return (
      <Router>
        <div>
          <img src={Logo} alt="logo" />
          <Switch>
            <PublicRoute
              exact
              path="/"
              checkToken={this.checkToken}
              component={Form}
            />
            <PrivateRoute
              path="/Drivers"
              component={Driver}
              checkToken={this.checkToken}
            />
            <PrivateRoute
              path="/Suppliers"
              component={Supplier}
              checkToken={this.checkToken}
            />
            <Route component={Form} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
