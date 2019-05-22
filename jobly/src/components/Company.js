import React, { Component } from 'react'

export default class Company extends Component {
  render() {
    const company = this.props.company;

    return (

      <div className="card my-4">
        <div className="card-header">
          {company.name}
        </div>
        <div className="card-body">
          
          <p className="card-text">
            {company.description}
          </p>
          <a href="#" className="btn btn-primary">Jobs</a>
        </div>
      </div>
    )
  }
}
