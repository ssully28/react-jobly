import React, { Component } from 'react'

export default class Job extends Component {
  render() {
    const job = this.props.job;

    return (

      <div className="card my-4">
        <div className="card-header">
          {job.title}
        </div>
        <div className="card-body">
          <h5 className="card-title">{job.company_handle}</h5>
          <p className="card-text">
            Salary: {job.salary}
            <br/>
            Equity: {job.equity}
          </p>
          <a href="#" className="btn btn-primary">Apply</a>
        </div>
      </div>
    )
  }
}
