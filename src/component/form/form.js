import React, { Component } from "react";
import { DRIVER, SUPPLIER } from "../../constants/userRoles.js";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import decode from "jwt-decode";
import Swal from "sweetalert2";

class Form extends Component {
  state = {
    email: "jjj@jjj.com",
    pin: "2437",
    userRole: DRIVER
  };
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = JSON.stringify(this.state);
    fetch("/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: data
    })
      .then(res => res.json())
      .then(returnedData => {
        if (returnedData.success === false) {
          Swal.fire({
            type: "error",
            title: "Incorrect login...",
            text: "Please try again!"
          });
        } else {
          localStorage.setItem("id_token", returnedData.token);
          Swal.fire({
            type: "success",
            title: "Successful Login!",
            text: "Woohoo"
          });
        }
      });
  };

  render() {
    return (
      <form>
        <label htmlFor="driver">
          <input
            type="radio"
            name="userRole"
            id="driver"
            value={DRIVER}
            checked={this.state.userRole === DRIVER}
            onChange={this.handleChange}
          />
          Driver
        </label>
        <label htmlFor="supplier">
          <input
            type="radio"
            name="userRole"
            id="supplier"
            value={SUPPLIER}
            checked={this.state.userRole === SUPPLIER}
            onChange={this.handleChange}
          />
          Supplier
        </label>
        <label htmlFor="email">Type your email here:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          autoFocus
          required
        />
        <label htmlFor="pin">Type your PIN here:</label>
        <input
          type="password"
          id="pin"
          name="pin"
          value={this.state.pin}
          onChange={this.handleChange}
          //suggested by React errors to include autoComplete attribute
          autoComplete="off"
          maxLength="4"
          required
        />
        <button onClick={this.handleSubmit} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
