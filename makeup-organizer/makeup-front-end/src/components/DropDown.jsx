import React, { Component } from "react";

export default class DropDown extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  }
  render() {
    return (
      <div className="where-does-product-gp">
        <button className="drop-down-button" onClick={this.showMenu}>
          Where does the product go?
        </button>
        {this.state.showMenu ? (
          <div className="drop-down-menu">
            <button className="eyes">Eyes</button>
            <button className="lips">Lips</button>
            <button className="face">Face</button>
          </div>
        ) : null}
      </div>
    );
  }
}