import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./landing.css";

class Landing extends Component {
  render() {
    return (
      <div>
      <div className="row">
        <div className="col m12 offset-1">
        <div className="container-desc">
          <h5 className="desc-header">About the Game: </h5>
          <p>
            World Domination Racing is a 3D racing game where you can race with the world leaders. Have fun!  
          </p>
          <h5 className="desc-header"> Cart Controls: </h5>
          <ul>
            <li>UP arrow to accelerate</li>
            <li>DOWN arrow to break</li>
            <li>RIGHT arrow to turn right</li>
            <li>LEFT arrow to turn left</li>
            <li>SPACEBAR to jump/drift</li>
          </ul>
        </div>
        </div>
      </div>
      
      <div className="container-landing">
        <div className="row">
          <div className="login-head center-align">
            <h6 className="login-title">
              Log In or Register to Play
            </h6>
            <br />
            <div className="login-button">
              <Link
                to="/register"
                className="btn btn-outline-primary"
              >
                Register
              </Link>
            </div> 
            <div className="login-button"> 
              <Link
                to="/login"
                className="btn btn-outline-primary"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Landing;
