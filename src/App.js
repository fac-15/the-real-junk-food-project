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
    userRole: "Drivers"
  };

  isAuth = data => {
    if (data) {
      this.setState({ name: data.name, ID: data.id });
    } else {
      this.setState({ name: "", ID: 0 });
    }
  };

  checkToken = () => {
    const { username, id, userRole } = decode(localStorage.getItem("id_token"));
    this.setState({ username, id, userRole });
  };

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/loggedin">Driver</Link>
            </li>
          </ul>
          <marquee>
            <img src={Logo} alt="logo" />
          </marquee>
          <Switch>
            <PublicRoute
              exact
              path="/"
              checkToken={this.checkToken}
              component={Form}
            />
            <PrivateRoute
              path="/loggedin"
              component={this.state.userRole === "Drivers" ? Driver : Supplier}
              details={this.state}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
