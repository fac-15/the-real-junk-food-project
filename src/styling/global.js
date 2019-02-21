import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700|Raleway');
    font-family: "Open Sans";
    font-size: 1.5em;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-color: #009DA8;
    background-image: -webkit-linear-gradient(117deg, ${props =>
      props.invert ? "#009DA8" : "#ffffff"} 63%, ${props =>
  props.invert ? "#ffffff" : "#009DA8"} 50% );

p {
  margin: 0.2em;
}

}`;

export default GlobalStyle;
