import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Logo from "./img/logo.png";
import Button from "./component/button/button.js";
// console.log(Logo);

class App extends Component {
  render() {
    return (
      <div>
        <p>hello!</p>
        <img src={Logo} alt="logo" />
        <Button />
      </div>
    );
  }
}

export default App;
