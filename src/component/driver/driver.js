import React from "react";

class Driver extends React.Component {
  render() { 
    return (
      <div>
        <p>TODAY'S CODE</p>
        <p></p>
        <p>YOUR ID</p>
        <p>{this.props.details.name}</p>
        <p>Your completed pickups today:</p>
      </div>
    );
  }
}

export default Driver;
