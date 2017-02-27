import $ from'jquery'
import React, { Component } from 'react';

export default class Recommender extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {this.props.recommender.email}
      </div>
    );
  }
}
