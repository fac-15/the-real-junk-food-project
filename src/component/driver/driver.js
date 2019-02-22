import React from "react";
import decode from "jwt-decode";
import Logout from "../buttons/logout/logout.js";
import CentreDiv from "../../styling/centreDiv.js";
import Code from "../../styling/code.js";
import GlobalStyle from "../../styling/global.js";
import "./background.css";

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
        <GlobalStyle invert />
        <CentreDiv>
          <p>TODAY'S CODE</p>
          <Code>{this.state.code || "loading"}</Code>
          <p>YOUR ID</p>
          <Code>{this.populateId()}</Code>
          <Logout />
        </CentreDiv>
      </div>
    );
  }
}

export default Driver;
