import React, {Component} from "react";
import { Route, NavLink, Redirect, withRouter   } from "react-router-dom";


class Login extends Component {
  constructor(props) {
    super(props)
    this.setRedirect = this.setRedirect.bind(this);
  }
  setRedirect() {
    // this.history.push('/new-route')
    console.log(this)
  }


  render(){
    return(
      <div>
        <h1> Login </h1>
        <button className="button-start pulsate" onClick={this.setRedirect}>
            Start
        </button>
      </div>
    );
  }
}

export default Login;