import $ from 'jquery';
$.ajaxSetup({ cache: false });

import React, { Component } from 'react';
import { render } from 'react-dom';
import Form from './components/profile/form.jsx';
import PropertyList from './components/profile/property_list.jsx';

class Profile extends Component {
  constructor() {
    super();
    this.current_url = location.href;

    $.ajax({
      async: false,
      url: '/current_user',
      dataType: 'json'
    })
    .done((data) => {
      this.currentUser = data
    })

    $.ajax({
      async: false,
      url: this.current_url,
      dataType: 'json'
    })
    .done((data) => {
      this.user = data
    })

    this.state = {
      currentUser: this.currentUser,
      user: this.user,
      properties: []
    }

    this.current_url = location.href;
    this.onSubmitSkill = this.onSubmitSkill.bind(this);
    this.onDeleteProperty = this.onDeleteProperty.bind(this);
    this.onPlusRecommend = this.onPlusRecommend.bind(this);
    this.onMinusRecommend = this.onMinusRecommend.bind(this);
  }

  componentDidMount() {
    this.loadPropertiesFromServer();
  }

  loadPropertiesFromServer() {
    $.ajax({
      url: `${this.current_url}/properties`,
      dataType: 'json'
    })
    .done((data) => {
      this.setState({
        properties: data
      });
    })
  }

  onSubmitSkill(name){
    $.ajax({
      url: `${this.current_url}/properties`,
      type: 'POST',
      data: { name: name }
    })
    this.loadPropertiesFromServer();
  }

  onDeleteProperty(id){
    $.ajax({
      url: `${this.current_url}/properties/${id}`,
      type: 'DELETE'
    })
    this.loadPropertiesFromServer();
  }

  onPlusRecommend(property_id) {
    $.ajax({
      url: `${this.current_url}/properties/${property_id}/recommends`,
      type: 'POST'
    })
    this.loadPropertiesFromServer();
  }

  onMinusRecommend(property_id) {
    $.ajax({
      url: `${this.current_url}/properties/${property_id}/recommend`,
      type: 'DELETE'
    })
    this.loadPropertiesFromServer();
  }

  render() {
    let guidance = null;
    if (this.state.user.id == this.state.currentUser.id) {
      guidance = <div className='label guidance'>マイページ</div>
    }

    return(
      <div id='profile'>
        <div className='container'>
          <h1 className='header'>{this.state.user.name}{guidance}</h1>
          <h2 className='item'>スキル・特徴</h2>
          <Form onSubmitSkill={this.onSubmitSkill} />
          <PropertyList properties={this.state.properties} currentUser={this.state.currentUser} user={this.state.user} onDeleteProperty={this.onDeleteProperty}  onPlusRecommend={this.onPlusRecommend} onMinusRecommend={this.onMinusRecommend} />
        </div>
      </div>
    )
  }
}

render(
    <Profile />,
    document.getElementById('app')
);
