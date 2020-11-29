import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
// pages to render
import Landing from "./components/Landing";
import Makeup from "./components/Makeup";

const baseURL = "http://localhost:3003";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makeup: [],
    };
    this.getMakeup = this.getMakeup.bind(this);
  }
  compoundDidMount() {
    this.getMakeup();
  }
  getMakeup() {
    fetch(baseURL + "/makeup")
      .then((data) => {
        return data.json();
      })
      .then((parsedData) => {
        this.setState({
          makeup: parsedData,
        });
      });
  }
  render() {
    return (
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/makeup" component={Makeup} />
          </Switch>
        </main>
        <Footer />
      </Router>
    );
  }
}
