import React, { Component } from "react";

export default class DropDown extends Component {
  render() {
    return (
      <div className="where-does-product-gp">
        <button>Where does the product go?</button>
        <div className="drop-down-menu">
          <button>Eyes</button>
          <button>Lips</button>
          <button>Face</button>
        </div>
      </div>
    );
  }
}
