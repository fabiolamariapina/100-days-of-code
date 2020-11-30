import React, { Component } from "react";

const baseURL = "http://localhost:3003";

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    fetch(baseURL + "/makeup", {
      method: "POST",
      body: JSON.stringify({
        type: this.state.type,
        name: this.state.name,
        img: this.state.img,
        shae: this.state.shade,
        tags: this.state.tags,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        this.props.handleAddHoliday(resJson);
        this.setState({
          type: "Where does the product go?",
          name: "",
          img: "",
          shade: "",
          tags: "",
        });
      });
  }
  render() {
    return (
      <main>
        <h3>Add To Your Collection</h3>
        <form onSubmit={this.handleSubmit} className="new-form"></form>
      </main>
    );
  }
}
