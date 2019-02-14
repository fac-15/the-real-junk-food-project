import React, { Component } from "react";
import styled from "styled-components";



const Lovely = styled.button`
padding: 3em;
background: red;

`




class Button extends Component {
  state = {
    toggled: false
  };
  toggle = () => {
    this.setState((prevState, props) => {
      return { toggled: !prevState.toggled };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.toggle}>
          Click me! Maybe soon I will be the submit button for the form.
        </button>
        {this.state.toggled && <p>Howdy 🤠</p>}
      </div>
    );
  }
}

export default Lovely;
