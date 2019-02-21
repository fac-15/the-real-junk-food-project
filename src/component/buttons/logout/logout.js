import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../../../styling/button.js";

class LogoutButton extends Component {
  logout = () => {
    localStorage.removeItem("id_token");
  };

  render() {
    return (
      <Link to={"/"}>
        <Button onClick={this.logout}>Logout</Button>
      </Link>
    );
  }
}

export default LogoutButton;
