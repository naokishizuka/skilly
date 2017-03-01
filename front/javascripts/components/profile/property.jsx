import $ from'jquery'
import React, { Component } from 'react';

export default class Property extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
  }

  handleDelete() {
    this.props.onDeleteProperty(this.props.property.id)
  }

  handlePlus() {
    this.props.onPlusRecommend(this.props.property.id);
  }

  handleMinus() {
    this.props.onMinusRecommend(this.props.property.id);
  }

  render() {

    let recommendBtn = null;
    if (this.props.user.id != this.props.currentUser.id){
      const recommenders = this.props.property.recommenders.filter((recommender) => { return recommender.id == this.props.currentUser.id; })
      if (recommenders.length == 0) {
        recommendBtn = <div className='recommend' onClick={this.handlePlus}>+</div>
      } else {
        recommendBtn = <div className='recommend' onClick={this.handleMinus}>-</div>
      }
    }


    let deleteBtn = null;
    if (!this.props.currentUser) {
      deleteBtn = null
    } else if (this.props.property.user.id == this.props.currentUser.id) {
      deleteBtn = <div className='recommend' onClick={this.handleDelete}>×</div>
    }

    const skill_url = `/skills/${this.props.property.skill_id}`

    return (
      <h3 className='skill-title'>
        <div className='skill-button'>
          <div className='count'>{this.props.property.recommends_count}</div>
          {recommendBtn}
          {deleteBtn}
        </div>
        <a href={skill_url}>{this.props.property.skill.name}</a>
      </h3>
    );
  }
}
