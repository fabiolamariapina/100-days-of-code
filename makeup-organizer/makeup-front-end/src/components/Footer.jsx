import React, { Component } from "react";
import styled from "styled-components";

export default class Footer extends Component {
  render() {
    const footer = {
      display: "flex",
      justifyContent: "space-between",
    };
    const footerSpiel = {
      fontStyle: "italic",
    };
    // const link = {
    //   textDecoration: "none",
    //   color: "#4f4846",
    // };
    const HoverLink = styled.a`
      color: #4f4846;
      text-decoration: none;
      :hover {
        color: #ddaf94;
        cursor: pointer;
      }
    `;
    return (
      <footer id="footer" style={footer}>
        <p className="trademark" style={footerSpiel}>
          2020 © All Right Reserved
        </p>
        <p className="credit" style={footerSpiel}>
          Coded by{" "}
          <HoverLink
            // style={link}
            className="linkedIn-link"
            href="https://www.linkedin.com/in/fabiolampina/"
            target="_blank"
          >
            Fabiola Pina
          </HoverLink>
        </p>
      </footer>
    );
  }
}
