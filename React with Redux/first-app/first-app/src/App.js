import React, { Component } from "react";

export default class App extends Component {
  render() {
    const styles = {
      border: "solid",
      testAlign: "center",
      boxShadow: "2px 2px",
    };
    return (
      <div className="App">
        <div style={styles}>Style</div>
        <button>Button 1</button>
        React
      </div>
    );
  }
}

const Appinstance = new App();
console.log(Appinstance);
