import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../buttons/logout/logout.js";
import Swal from "sweetalert2";
import CentreDiv from "../../styling/centreDiv.js";
import Button from "../../styling/button.js";
import FormStyle from "../../styling/fullForm.js";
import Input from "../../styling/form.js";
import GlobalStyle from "../../styling/global.js";
import Label from "../../styling/label.js"

class Supplier extends React.Component {
  state = {
    id: "",
    dailyCode: ""
  };
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  handleSubmit = event => {
    console.log("lesgo");
    event.preventDefault();
    const data = JSON.stringify(this.state);
    fetch("/verify", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: data
    })
      .then(res => res.json())
      .then(returnedData => {
        if (returnedData.success === false) {
          Swal.fire({
            type: "error",
            title: "Driver ID or Daily Code Incorrect",
            text: "Please try again!"
          });
        } else {
          Swal.fire({
            type: "success",
            title: `Say hello to ${returnedData.name}`,
            text: "Woohoo"
          });
          // const { userRole } = this.props.checkToken();
          // this.setState({ loggedIn: true, redirectPath: userRole });
        }
      })
      .catch(err =>
        console.log(
          "Fetch error. Maybe check your node server is running?",
          err
        )
      );
  };
  render() {
    return (
      <div>
        <GlobalStyle invert />
        <FormStyle>
          <CentreDiv>
            <Label htmlFor="email" />
            <Input
              type="text"
              id="email"
              name="id"
              value={this.state.id}
              onChange={this.handleChange}
              placeholder="Type the driver's ID here"
              autoFocus
              required
            />
            <Label htmlFor="pin" />
            <Input
              type="text"
              id="pin"
              name="dailyCode"
              value={this.state.dailyCode}
              onChange={this.handleChange}
              placeholder="Type the daily code here"
              //suggested by React errors to include autoComplete attribute
              autoComplete="off"
              required
            />
            <div className="buttonsDiv">
              <Button invert onClick={this.handleSubmit} type="submit">
                Submit
              </Button>
              <Link to={"/"}>
                <Button invert onClick={this.logout}>
                  Logout
                </Button>
              </Link>
            </div>
          </CentreDiv>
        </FormStyle>
      </div>
    );
  }
}

export default Supplier;
