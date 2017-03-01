import $ from 'jquery';
import React, { Component } from 'react';
import Typeahead from 'react-typeahead-component';
import OptionTemplate from './option_template.jsx'

export default class Form extends Component {
  constructor() {
    super();
    this.state = { inputValue: '', options: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.current_url = location.href;
  }

  clear() {
    this.setState({ inputValue: '' });
  }

  handleChange(e) {
    let value = e.target.value;
    this.setState({ inputValue: value })
  }

  handleKeyUp(e) {
    this.getOptions(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmitSkill(this.state.inputValue);
    this.clear();
  }

  handleOptionChange(e, option) {
    this.setState({inputValue: option})
  }

  handleOptionClick(e, option) {
    this.setState({inputValue: option});
  }

  getOptions(value) {
    $.ajax({
      url: `${this.current_url}/skills/search`,
      dataType: 'json',
      data: {keyword: value }
    })
    .done((data) => {
      this.setState({
        options: data
      });
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <Typeahead
            placeholder="スキル名入力（Enterで確定）"
            inputValue={this.state.inputValue}
            options={this.state.options}
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
            optionTemplate={OptionTemplate}
            onOptionChange={this.handleOptionChange}
            onOptionClick={this.handleOptionClick}
          />
          <input type='submit' onSubmit={this.handleSubmit} className='hidden' />
        </form>
      </div>
    );
  }
}
