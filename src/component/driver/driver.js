import React from "react";
import decode from "jwt-decode";
import Logout from "../buttons/logout/logout.js";

class Driver extends React.Component {
  state = {
    code: ""
  };

  //API call to Airtable for the daily code
  getCodeFunc = () => {
    fetch("/getcode", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(codeData => {
        this.setState({
          code: codeData.Code
        });
      });
  };

  //Runs API call on page render
  componentDidMount() {
    this.getCodeFunc();
  }

  populateId = () => {
    return decode(localStorage.getItem("id_token")).id;
  };

  render() {
    return (
      <div>
        <p>TODAY'S CODE</p>
        <p>{this.state.code || "loading"}</p>
        <p>YOUR ID</p>
        <p>{this.populateId()}</p>
        <Logout />
      </div>
    );
  }
}

export default Driver;
