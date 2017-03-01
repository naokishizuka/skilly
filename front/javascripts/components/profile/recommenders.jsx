import React, { Component } from 'react';

export default class Recommenders extends Component {
  constructor() {
    super();
  }

  render() {
    const recommenders = this.props.recommenders.map((recommender, index) => {
      if (index < 10) {
        const url = `/users/${recommender.id}`
        return <a key={index} href={url}><img className='profile-image' width='34px' height='34px' /></a>
      }
    });

    return (
      <span>
        {recommenders}
      </span>
    );
  }
}
