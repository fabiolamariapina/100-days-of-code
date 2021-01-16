import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <main className="main">
              <Route path="/" exact component={Landing} />
            </main>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
