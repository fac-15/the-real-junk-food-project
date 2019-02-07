import React, { Component } from "react";
import "./App.css";
import Logo from "./img/logo.png";
import styled from 'styled-components';

const Mainlogo = styled.img`
  width: 200px;
  height: 200px;
`;

class App extends Component {
  render() {
    return (
      <div>
        <p>hello!</p>
          <Mainlogo src={Logo} alt="logo" />
      </div>
    );
  }
}

export default App;
