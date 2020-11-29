import React, { Component } from "react";

export default class Makeup extends Component {
  render() {
    return (
      <main>
        <h3>Your collection</h3>
        <div>
          {this.props.makeup.map((makeup) => {
            return (
              <div key={makeup._id} className="makeup-product">
                <h4>{makeup.name}</h4>
                <img>{makeup.img}</img>
                <div className="edit-delete-buttons">
                  <button className="edit-button">EDIT</button>
                  <button className="delete-button">DELETE</button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    );
  }
}
