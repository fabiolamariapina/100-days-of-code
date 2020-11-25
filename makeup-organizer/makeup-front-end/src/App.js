import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";

export default class App extends Component {
  render() {
    return (
      <div id="root">
        <Header />
        <Landing />
        <Footer />
      </div>
    );
  }
}
