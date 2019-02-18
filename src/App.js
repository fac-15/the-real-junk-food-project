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
    name: "",
    ID: 0,
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
    const { name, ID, userRole } = decode(localStorage.getItem("id_token"));
    this.setState({ name, ID, userRole });
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
          <img src={Logo} alt="logo" />
          <Switch>
            <PublicRoute exact={true} path="/" component={Form} />
            <PrivateRoute
              path="/"
              component={
                this.state.userRole === "Drivers"
                  ? Driver
                  : this.state.userRole === "Suppliers"
                  ? Supplier
                  : Form
              }
              details={this.state}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
