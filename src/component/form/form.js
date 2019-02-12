import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
const Airtable = require("airtable");
const base = new Airtable({ apiKey: "keyc5S01QxJ4qTMSs" }).base(
  "appyRQ1dyAAvZyIPI"
);

class Form extends Component {
  state = {
    email: "",
    pin: "",
    stuff: [],
    hello: false
  };
  handleChange = event => {
    const target = event.target;
    this.setState({ [target.name]: target.value });
  };
  handleSubmit = event => {
    let thisPin = this.state.pin;
    let thisEmail = this.state.email;
    event.preventDefault();
    // const data = JSON.stringify(this.state);
    base("Drivers")
      .select({
        // Selecting the first 3 records in Grid view:
        filterByFormula: `(AND({pin} = "${thisPin}", {email} = "${thisEmail}"))`,
        maxRecords: 3,
        view: "Grid view"
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.
          records.forEach(function(record) {
            console.log("Retrieved", record.get("Name"));
          });
          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
    this.setState(() => {
      return { hello: true };
    });
  };
  render() {
    if (this.state.hello) {
      return <Redirect to={"/"} />;
    }
    return (
      <form>
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
        <ul>
          {this.state.stuff.map(name => {
            return <li>name</li>;
          })}
        </ul>
      </form>
    );
  }
}

export default Form;
