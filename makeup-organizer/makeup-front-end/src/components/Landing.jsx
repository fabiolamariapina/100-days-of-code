import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <div className="landing-main">
            <div className="welcome">
              <div className="call-to-action">
                <h3>I HELP YOU ORGANIZE YOUR MAKEUP</h3>
              </div>
              <div className="landing-links">
                <button className="log-in">LOG IN</button>
                <a className="new-user" href="/users/new">
                  NEW USER? CLICK HERE TO CREATE AN ACCOUNT FOR FREE!
                </a>
              </div>
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
