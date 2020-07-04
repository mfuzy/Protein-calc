import React from "react";

export class Food extends React.Component {
  render() {
    return (
      <div className="food">
        <span id={this.props.id}>{this.props.name}</span>
        <br />
        <img src={this.props.img} className="foodimg" />
        <br />
        {this.props.children}
      </div>
    );
  }
}
