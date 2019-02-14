import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700|Raleway');
    font-family: "Open Sans";
    font-size: 3em;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-color: #009DA8;
    background-image: -webkit-linear-gradient(117deg, #ffffff 63%, #009DA8 50% )
}`

export default GlobalStyle;