import React, { Component } from "react";
import { BrowserRouter, Route, Link} from "react-router-dom";
import { createGlobalStyle } from "styled-components";

// import logo from "./logo.svg";
import "./App.css";
import Logo from "./img/logo.png";
import Lovely from "./component/button/button.js";
import Form from "./component/form/form.js";
import GlobalStyle from "./global.js";



// console.log(Logo);





class App extends Component {
  state = {
    isAuthenticated: false
  };



  render() {
    return (
    <div>
      <GlobalStyle />
     <Form />
    </div>
    //  {/* </div>
    //   // <div>
    //   //   <img src={Logo} alt="logo" />
    //   //   <Form />
    //   // </div> */}
    );
  }
}

export default App;
