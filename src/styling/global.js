import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700|Raleway');
    font-family: "Open Sans";
    font-size: 1.5em;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-color: #009DA8;
    background-image: linear-gradient(155deg, ${props =>
      props.invert ? "#ffffff" : "#009DA8"} 35%, ${props =>
  props.invert ? "#009DA8" : "#ffffff"} 35% );

p {
  margin: 0.2em;
}

}`;

export default GlobalStyle;
