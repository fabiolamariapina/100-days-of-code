import React, { Component } from "react";
import styled from "styled-components";

export default class Landing extends Component {
  render() {
    const Landing = styled.div`
      display: flex;
    `;
    const LandingImage = styled.img`
      max-width: 70%;
    `;
    return (
      <Landing className="landing-main">
        <div className="landing-first-half">
          <LandingImage
            className="landing-image"
            src="images/makeup.jpg"
            alt="aestically pleasing makeup"
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
      </Landing>
    );
  }
}
