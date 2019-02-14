import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

class Form extends Component {
  // hardcoded state for testing purposes
  state = {
    email: "jjj@jjj.com",
    pin: "2437",
    userRole: "driver"
  };
  handleChange = event => {
    const target = event.target;
    // const value = target.type === 'radio' ? target.id : target.value
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
      .then(res => res.text())
      .then(returnedData => console.log(returnedData));
  };
  render() {
    if (this.state.hello) {
      return <Redirect to={"/"} />;
    }
    return (
      <form>
        <label htmlFor="driver">
          <input
            type="radio"
            name="userRole"
            id="driver"
            value="driver"
            checked={this.state.userRole === "driver"}
            onClick={this.handleChange}
          />
          Driver
        </label>
        <label htmlFor="supplier">
          <input
            type="radio"
            name="userRole"
            id="supplier"
            value="supplier"
            checked={this.state.userRole === "supplier"}
            onClick={this.handleChange}
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
