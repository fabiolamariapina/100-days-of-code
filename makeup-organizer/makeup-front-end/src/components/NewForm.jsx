import React, { Component } from "react";

export default class NewForm extends Component {
  constructor() {
    super();
    this.state = {
      type: "Where does the product go?",
      name: "",
      img: "",
      shade: "",
      tags: "",
    };
  }
  render() {
    return (
      <main>
        <h3>Add To Your Collection</h3>
        <form className="new-form"></form>
      </main>
    );
  }
}
