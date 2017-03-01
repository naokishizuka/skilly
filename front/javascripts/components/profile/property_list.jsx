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
        return <li className='skill' key={property.id} >
                 <p className='skill-recommenders'>
                   <Recommenders recommenders={property.recommenders} />
                 </p>
                 <Property property={property} currentUser={this.props.currentUser} user={this.props.user} onDeleteProperty={this.props.onDeleteProperty}  onPlusRecommend={this.props.onPlusRecommend} onMinusRecommend={this.props.onMinusRecommend} />
               </li>
      } else {
        return <li className='skill' key={property.id} >
                 <Property property={property} currentUser={this.props.currentUser} user={this.props.user} onDeleteProperty={this.props.onDeleteProperty} onPlusRecommend={this.props.onPlusRecommend} onMinusRecommend={this.props.onMinusRecommend} />
               </li>
      }
    });

    return(
      <div>
        <ul className='skills'>{properties}</ul>
      </div>
    );
  }
}
