import React, { Component } from "react";

class Form extends Component {
  state = {
    email: "",
    pin: ""
  };
  handleChange = event => {
    const target = event.target;
    this.setState({ [target.name]: target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const data = JSON.stringify(this.state);
    fetch("https://");
  };
  render() {
    return (
      <form>
        <label htmlFor="email">Type your email here:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          required
        />
        <label htmlFor="pin">Type your PIN here:</label>
        <input
          type="password"
          id="pin"
          name="pin"
          value={this.state.pin}
          onChange={this.handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
