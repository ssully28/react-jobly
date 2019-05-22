import React, { Component } from 'react';
import './Company.css';

export default class Company extends Component {
  render() {
    const company = this.props.company;

    return (

      <div className="card my-4">
        <div className="
          card-header
          d-flex
          justify-content-start">
          <a href={`/companies/${company.handle}`} className="">{company.name}</a>
          
        </div>
        <div className="card-body">
          
          <p className="card-text">
            {company.description}
          </p>
        </div>
      </div>
    )
  }
}
