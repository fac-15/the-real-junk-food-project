import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Logo from './img/logo.png';
// console.log(Logo);

class App extends Component {
  render() {
    return (<div>
      <p>hello!</p>
      <img src={Logo} alt='logo' />
      </div>)
  }
}

export default App;
