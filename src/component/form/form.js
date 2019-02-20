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
// import styled from "styled-components";
import Button from "../../styling/button.js";
import Input from "../../styling/form.js";
import FormStyle from "../../styling/fullForm.js"
// import Grid from "../../styling/grid.js";
const Airtable = require("airtable");
const base = new Airtable({ apiKey: "keyc5S01QxJ4qTMSs" }).base(
  "appyRQ1dyAAvZyIPI"
);

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
    
      
      <FormStyle >
        <label htmlFor="driver">
          <Input
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
          <Input
            type="radio"
            name="userRole"
            id="supplier"
            value={SUPPLIER}
            checked={this.state.userRole === SUPPLIER}
            onChange={this.handleChange}
          />
          Supplier
        </label>
        <label htmlFor="email" />
        <Input
          type="email"
          id="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Type your email here"
          autoFocus
          required
        />
        <label htmlFor="pin" />
        <Input
          type="password"
          id="pin"
          name="pin"
          value={this.state.pin}
          onChange={this.handleChange}
          placeholder="Type your PIN here"
          //suggested by React errors to include autoComplete attribute
          autoComplete="off"
          maxLength="4"
          required
        />
        
        
        <Button onClick={this.handleSubmit} type="submit">
          Submit
        </Button>
      </FormStyle>
    
      
    );
  }
}

export default Form;
