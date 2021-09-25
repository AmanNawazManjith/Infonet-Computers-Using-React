import React, { Component } from "react";

export class ItemCards extends Component {
  render() {

    return (
      <div class="card mx-auto" style={{ width: "18rem" }}>
        <img
          src={this.props.img}
          class="card-img-top image zoom"
          alt={this.props.alt}
        />
        <div class="card-body">
          <h5 class="card-title">{this.props.title}</h5>
          <p class="card-text">{this.props.description.map((disc) => <li>{disc}</li>)}</p>
          <a href="/" class="btn btn-dark"> 
            {this.props.price}
          </a>
        </div>
      </div>
    );
  }
}
