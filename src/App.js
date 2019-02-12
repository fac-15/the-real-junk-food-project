import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Logo from "./img/logo.png";
import Button from "./component/button/button.js";
import Form from "./component/form/form.js";
// console.log(Logo);

class App extends Component {
  state = {
    isAuthenticated: false
  };

  render() {
    return (
      <div>
        <img src={Logo} alt="logo" />
        <Form />
      </div>
    );
  }
}

export default App;
