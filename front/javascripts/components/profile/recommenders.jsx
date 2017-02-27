import React, { Component } from 'react';

export default class Recommenders extends Component {
  constructor() {
    super();
  }

  render() {
    const recommenders = this.props.recommenders.map((recommender, index) => {
      if (index < 10) {
        return <li key={index}>{recommender.email}</li>
      }
    });

    return (
      <ul>
        {recommenders}
      </ul>
    );
  }
}
