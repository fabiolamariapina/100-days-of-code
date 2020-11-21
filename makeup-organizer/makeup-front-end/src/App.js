import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div id="root">
        <Header />
        <main className="landing-main">
          <h2 className="call-to-action">I HELP YOU ORGANIZE YOUR MAKEUP</h2>
        </main>
        <Footer />
      </div>
    );
  }
}
