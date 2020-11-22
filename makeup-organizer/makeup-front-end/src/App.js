import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div id="root">
        <Header />
        <main>
          <div className="landing-main">
            <div className="call-to-action">
              <h3>I HELP YOU ORGANIZE YOUR MAKEUP</h3>
            </div>
            <div className="landing-links">
              <button className="log-in">
                <a href="/sessions/new">LOG IN</a>
              </button>
              <a className="new-user" href="/users/new">
                NEW USER? CLICK HERE TO CREATE AN ACCOUNT FOR FREE!
              </a>
            </div>
            <div className="landing-image">
              <img
                src="https://www.sephora.com/productimages/sku/s2368454-av-04-zoom.jpg?imwidth=1166"
                alt="makeup"
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
