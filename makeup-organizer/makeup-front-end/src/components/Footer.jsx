import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    const footer = {
      display: "flex",
      justifyContent: "space-between",
    };
    const footerSpiel = {
      fontStyle: "italic",
    };
    const link = {
      textDecoration: "none",
      color: "#4f4846",
    };
    return (
      <footer id="footer" style={footer}>
        <p className="trademark" style={footerSpiel}>
          2020 © All Right Reserved
        </p>
        <p className="credit" style={footerSpiel}>
          Coded by{" "}
          <a
            style={link}
            className="linkedIn-link"
            href="https://www.linkedin.com/in/fabiolampina/"
            target="_blank"
          >
            Fabiola Pina
          </a>
        </p>
      </footer>
    );
  }
}
