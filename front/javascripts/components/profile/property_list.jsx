import React, { Component } from 'react';
import Property from './property.jsx'
import Recommenders from './recommenders.jsx'

export default class PropertyList extends Component {
  constructor() {
    super();
  }

  render() {
    const properties = this.props.properties.map((property, index) => {
      if (index < 6) {
        return <li key={property.id} >
                 <Property property={property} onDeleteProperty={this.props.onDeleteProperty} currentUser={this.props.currentUser} onPlusRecommend={this.props.onPlusRecommend} onMinusRecommend={this.props.onMinusRecommend} />
                 <Recommenders recommenders={property.recommenders} />
              </li>
      } else {
        return <li key={property.id} >
                 <Property property={property} onDeleteProperty={this.props.onDeleteProperty} currentUser={this.props.currentUser} onPlusRecommend={this.props.onPlusRecommend} onMinusRecommend={this.props.onMinusRecommend} />
               </li>
      }
    });

    return(
      <div>
        <ul>{properties}</ul>
      </div>
    );
  }
}
