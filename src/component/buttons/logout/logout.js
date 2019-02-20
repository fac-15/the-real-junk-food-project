import React, { Component } from "react";
import { Link } from "react-router-dom";

class LogoutButton extends Component {
  logout = () => {
    localStorage.removeItem("id_token");
  };

  render() {
    return (
      <Link to={"/"}>
        <button onClick={this.logout}>Logout</button>
      </Link>
    );
  }
}

export default LogoutButton;
