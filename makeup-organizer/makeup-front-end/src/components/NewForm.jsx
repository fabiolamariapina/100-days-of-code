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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.currentTarget.id]: event.currentTarget.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(baseURL + "/makeup", {
      method: "POST",
      body: JSON.stringify({
        type: this.state.type,
        name: this.state.name,
        img: this.state.img,
        shade: this.state.shade,
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
        <form onSubmit={this.handleSubmit} className="new-form">
          <input
            type="text"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Name"
          />
          <input
            type="text"
            id="img"
            onChange={this.handleChange}
            value={this.state.img}
            placeholder="Image"
          />
          <input
            type="text"
            id="shade"
            onChange={this.handleChange}
            value={this.state.shade}
            placeholder="Shade"
          />
          <input
            type="text"
            id="tags"
            onChange={this.handleChange}
            value={this.state.tags}
            placeholder="Tags"
          />
        </form>
      </main>
    );
  }
}
