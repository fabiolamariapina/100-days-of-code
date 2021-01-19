import React, { Component } from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Landing extends Component {
  render() {
    const Landing = styled.div`
      display: flex;
    `;
    const LandingImage = styled.img`
      max-width: 70%;
    `;
    const AboutMe = styled.h3`
      display: flex;
      justiify-content: center;
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
        <div className="log-in-form">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <br />
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <br />
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <br />
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Landing>
    );
  }
}
