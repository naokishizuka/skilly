import $ from 'jquery';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Form from './components/profile/form.jsx';
import PropertyList from './components/profile/property_list.jsx';

class Profile extends Component {
  constructor() {
    super();

    $.ajax({
      async: false,
      url: '/current_user',
      dataType: 'json'
    })
    .done((data) => {
      this.state = {
        properties: [],
        currentUser: data
      }
    })

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
    console.log(property_id);
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
    return(
      <div>
        <Form onSubmitSkill={this.onSubmitSkill} />
        <PropertyList properties={this.state.properties} onDeleteProperty={this.onDeleteProperty} currentUser={this.state.currentUser} onPlusRecommend={this.onPlusRecommend} onMinusRecommend={this.onMinusRecommend} />
      </div>
    )
  }
}

render(
    <Profile />,
    document.getElementById('app')
);
