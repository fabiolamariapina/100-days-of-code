import React, { Component } from "react";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing-main">
        <div className="landing-first-half">
          <img
            className="landing-image"
            src="images/top-shelf-3.jpg"
            alt="Slide 0"
          />
        </div>

        <div className="welcome">
          <div className="slogan">
            <h3 className="page-header" id="landing-header">
              I HELP YOU ORGANIZE YOUR MAKEUP
            </h3>
          </div>
          <div className="log-in-create-account"></div>
        </div>
      </div>
    );
  }
}
