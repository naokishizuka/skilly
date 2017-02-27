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

    this.onSubmitSkill = this.onSubmitSkill.bind(this);
    this.onDeleteProperty = this.onDeleteProperty.bind(this);
  }

  componentDidMount() {
    this.loadPropertiesFromServer();
  }

  loadPropertiesFromServer() {
    const current_url = location.href;
    $.ajax({
      url: `${current_url}/properties`,
      dataType: 'json'
    })
    .done((data) => {
      this.setState({
        properties: data
      });
    })
  }

  onSubmitSkill(name){
    const current_url = location.href;
    $.ajax({
      url: `${current_url}/properties`,
      type: 'POST',
      dataType: 'json',
      data: { name: name }
    })
    this.loadPropertiesFromServer();
  }

  onDeleteProperty(id){
    const current_url = location.href;
    $.ajax({
      url: `${current_url}/properties/${id}`,
      type: 'DELETE',
      dataType: 'json'
    })
    this.loadPropertiesFromServer();
  }

  render() {
    return(
      <div>
        <Form onSubmitSkill={this.onSubmitSkill} />
        <PropertyList properties={this.state.properties} onDeleteProperty={this.onDeleteProperty}/>
      </div>
    )
  }
}

render(
    <Profile />,
    document.getElementById('app')
);
