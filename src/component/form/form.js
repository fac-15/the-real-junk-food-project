import React, {Component} from "react";

class LoginForm extends Component {
    state = {
        person: ''
      };

      driver = () => {
          this.setState(() => {
              return {person: 'driver'}
              
          })
      }

      supplier = () => {
        this.setState(() => {
            return {person: 'supplier'}
        })
    }
    
    render(){
        return (
            <div>
                <button id='driver' onClick={this.driver}>Driver</button>
                <button id='supplier' onClick={this.supplier}>Supplier</button>
              <form>
                <label>
                  Email
                  <input type="text" placeholder="Please type your email address" />
                </label>
                <label>
                  Pin Number
                  <input type="text" placeholder="Please type 4 digit pin number" />
                </label>
                <button type="submit">Submit</button>
              </form>
            </div>
          );
    }
  }

export default LoginForm;
