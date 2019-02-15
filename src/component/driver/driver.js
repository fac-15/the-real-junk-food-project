import React from "react";

class Driver extends React.Component {
  state = {
    code: ""
  };

  getCodeFunc = () => {
    console.log("1. we started get code func");
    fetch("/getcode", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(codeData => {
        console.log("3 HELLO WORK", codeData);
        this.setState({
          code: codeData.Code
        });
        console.log("4", this.state.code);
      });
  };

  componentDidMount() {
    this.getCodeFunc();
  }

  testCall = () => {
    this.getCodeFunc();
  };

  render() {
    return (
      <div>
        <p>TODAY'S CODE</p>
        <p>{this.state.code}</p>
        <p>YOUR ID</p>
        <p>{this.props.details.name}</p>
        <p>Your completed pickups today:</p>
        <button onClick={this.testCall}>Test</button>
      </div>
    );
  }
}

export default Driver;
