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
    if (!this.props.currentUser) {
      recommendBtn = null
    } else {
      const recommenders = this.props.property.recommenders.filter((recommender) => { return recommender.id == this.props.currentUser.id; })
      if (recommenders.length == 0) {
        recommendBtn = <span onClick={this.handlePlus}>+1</span>
      } else {
        recommendBtn = <span onClick={this.handleMinus}>-1</span>
      }
    }

    let deleteBtn = null;
    if (!this.props.currentUser) {
      deleteBtn = null
    } else if (this.props.property.user.id == this.props.currentUser.id) {
      deleteBtn = <span onClick={this.handleDelete}>削除</span>
    }

    const skill_url = `/skills/${this.props.property.skill_id}`

    return (
      <div>
        <span>{this.props.property.recommends_count}</span>
        <a href={skill_url}>{this.props.property.skill.name}</a>
        {deleteBtn}
        {recommendBtn}
      </div>
    );
  }
}
