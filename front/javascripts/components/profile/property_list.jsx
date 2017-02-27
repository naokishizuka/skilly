import React, { Component } from 'react';
import Property from './property.jsx'

export default class PropertyList extends Component {
  constructor() {
    super();
  }

  render() {
    const properties = this.props.properties.map((property) =>
            <li key={property.id} ><Property property={property} onDeleteProperty={this.props.onDeleteProperty} /></li>
          );
    return(
      <div>
        <ul>{properties}</ul>
      </div>
    );
  }
}
