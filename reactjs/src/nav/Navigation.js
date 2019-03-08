import React, { Component } from "react";
import { Route, NavLink, Redirect  } from "react-router-dom";
import Home from "../Home";

class Navigation extends Component {
  state = {
    redirect: false
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/home' />
    }
  }


  render() {
    return (
      <div>
        <div className="flex-container">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 1999.007 560" xmlSpace="preserve">
              <path class="line1" d="M0,205.122c0,0,1.873-5.227,34.181,11.771
                c34.482,18.143,59.697,52.119,93.893,71.865c58.23,33.623,127.729,35.703,192.193,20.418
                c84.208-19.967,120.448-106.473,201.401-131.238c33.513-10.252,72.097-7.987,100.849,12.053
                c13.948,9.722,25.016,23.027,38.729,33.078c41.312,30.281,101.44,28.432,150.36,28.432c58.764,0,1187.401,0,1187.401,0"/>
              <path class="line3" d="M7.622,68.997
                c63.526,16.725,114.958,46.718,161.474,93.375c58.574,58.752,124.397,129.296,215.396,122.491
                c36.201-2.707,69.877-18.493,104.376-29.793c92.193-30.198,191.378-28.556,288.366-26.362
                c222.659,5.037,443.983,4.791,666.654,4.791c85.665,0,555.119,0,555.119,0"/>
              </svg>
            <div className="inner-element pulsate-text">
              Face recognition using AI for YNS Empoyees
            </div>
            <div className="panel-bottom">
              {this.renderRedirect()}
              <button className="button-start pulsate" onClick={this.setRedirect}>
                  Start
              </button>
            </div>
        </div>
        <Route path="/home" component={Home} />
     </div>
    );
  }
}

export default Navigation;