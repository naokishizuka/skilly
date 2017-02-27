import $ from'jquery'
import React, { Component } from 'react';

export default class Property extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onDeleteProperty(this.props.property.id)
  }

  render() {
    return (
      <div>
        <span>{this.props.property.skill.name}</span>
        <span onClick={this.handleClick}>削除</span>
      </div>
    );
  }
}
