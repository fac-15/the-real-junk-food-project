import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Logo from "./img/logo.png";
import LogoStyle from "./styling/logo.js";
import Form from "./component/form/form.js";
import Driver from "./component/driver/driver.js";
import PrivateRoute from "./component/routes/privateRoute.js";
import PublicRoute from "./component/routes/publicRoute.js";
import Supplier from "./component/supplier/supplier.js";
import GlobalStyle from "./styling/global.js";

class App extends Component {
  state = {
    isAuthenticated: false,
    name: "",
    ID: 0
  };

  isAuth = data => {
    if (data) {
      this.setState({ isAuthenticated: true, name: data.name, ID: data.id });
    } else {
      this.setState({ isAuthenticated: false, name: "", ID: 0 });
    }
  };

  render() {
    return (
      <Router>
        <div>
          <GlobalStyle />

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/driver">Driver</Link>
            </li>
            <li>
              <Link to="/protec">Protected Route</Link>
            </li>
          </ul>
          <LogoStyle src={Logo} alt="logo" />
          <Switch>
            <PublicRoute
              exact={true}
              path="/"
              component={Form}
              isAuth={this.isAuth}
            />
            <PrivateRoute
              path="/driver"
              component={Driver}
              details={this.state}
            />
            <PrivateRoute
              path="/protec"
              component={Supplier}
              authed={this.state.isAuthenticated}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
