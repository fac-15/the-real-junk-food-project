import React from "react";

class Driver extends React.Component {
  render() {
    console.log('Driver router', this.authed);  
    return (
      <div>
        <p>TODAY'S CODE</p>
        <p></p>
        <p>YOUR ID</p>
        <p></p>
        <p>Your completed pickups today:</p>
      </div>
    );
  }
}

export default Driver;
