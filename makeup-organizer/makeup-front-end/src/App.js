import React, { Component } from "react";
import Header from "./components/Header";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <footer id="footer">
          <p className="trademark">2020 © All Right Reserved</p>
          <p className="credit">
            Coded by{" "}
            <a
              className="linkedIn-link"
              href="https://www.linkedin.com/in/fabiolampina/"
              target="_blank"
            >
              Fabiola Pina
            </a>
          </p>
        </footer>
      </div>
    );
  }
}
