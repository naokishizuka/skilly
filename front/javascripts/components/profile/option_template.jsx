import React from 'react';


export default class OptionTemplate extends React.Component {
  render() {
    let bgColor = null;
    if (this.props.isSelected) {
      bgColor = {
        color: 'blue'
      };
    }

    return (
      <div style={bgColor}>
        {this.renderOptions()}
      </div>
    );
  }

  renderOptions() {
    let optionData = this.props.data;
    let inputValue = this.props.inputValue;
    if (optionData) {
      return (
        <span>
          {optionData}
        </span>
      )
    }
  }
}