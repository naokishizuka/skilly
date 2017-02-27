import React, { Component } from 'react';
import Property from './property.jsx'

export default class PropertyList extends Component {
  constructor() {
    super();
  }

  render() {
    const properties = this.props.properties.map((property) =>
            <li key={property.id} ><Property property={property} onDeleteProperty={this.props.onDeleteProperty} currentUser={this.props.currentUser} onPlusRecommend={this.props.onPlusRecommend} onMinusRecommend={this.props.onMinusRecommend} /></li>
          );
    return(
      <div>
        <ul>{properties}</ul>
      </div>
    );
  }
}
