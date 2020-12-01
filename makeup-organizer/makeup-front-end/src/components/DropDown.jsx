import React, { Component } from "react";

export default class DropDown extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };
  }
  render() {
    return (
      <div className="where-does-product-gp">
        <button>Where does the product go?</button>
        {this.state.showMenu ? (
          <div className="drop-down-menu">
            <button>Eyes</button>
            <button>Lips</button>
            <button>Face</button>
          </div>
        ) : null}
      </div>
    );
  }
}
