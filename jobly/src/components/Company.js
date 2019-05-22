import React, { Component } from 'react';
import './Company.css';
import { Link } from 'react-router-dom';

class Company extends Component {
  render() {
    const company = this.props.company;

    return (
      <div className="card my-4">
        <div className="
          card-header
          d-flex
          justify-content-start">
          <Link to={`/companies/${company.handle}`} className="">{company.name}</Link>
        </div>
        <div className="card-body">
          <p className="card-text">
            {company.description}
          </p>
        </div>
      </div>
    );
  }
}

export default Company;