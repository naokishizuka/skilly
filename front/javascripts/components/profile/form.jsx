import $ from 'jquery';
import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = { inputValue: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clear() {
    this.setState({ inputValue: '' });
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmitSkill(this.state.inputValue);
    this.clear();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.inputValue} onChange={this.handleChange} />
        <input type='submit' onSubmit={this.handleSubmit} />
      </form>
    );
  }
}
