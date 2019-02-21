import styled from "styled-components";

const Button = styled.button`
  width: 8rem;
  height: 3rem;
  background-color: ${props => (props.invert ? "#ffffff" : "#009da8")};
  border-radius: 0.5em;
  border: none;
  font-size: 1.3rem;
  color: ${props => (props.invert ? "009da8" : "#ffffff")};
  outline: none;
  :hover {
    background: #b9faff;
  }
  display: inline-block;
  margin: 1.5em 0.5em 0.5em 0.5em;
  
`;
export default Button;
