import React, { Component } from "react";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Logo from "./img/logo.png";
import Form from "./component/form/form.js";
import Driver from "./component/driver/driver.js";
import PrivateRoute from "./component/routes/privateRoute.js";
import Supplier from "./component/supplier/supplier.js";
// console.log(Logo);

class App extends Component {
  state = {
    isAuthenticated: true
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
              <Link to="/driver">Driver</Link>
            </li>
            <li>
              <Link to="/protec">Protected Route</Link>
            </li>
          </ul>
          <img src={Logo} alt="logo" />
          <Switch>
            <Route exact={true} path="/" component={Form} />
            <Route path="/driver" component={Driver} />
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
