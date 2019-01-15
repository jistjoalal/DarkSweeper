import React, { Component } from 'react';

export default class TitleBar extends Component {
  render() {
    return (
      <div className="TitleBar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
        </div> 
      </div>
    );
  }
}