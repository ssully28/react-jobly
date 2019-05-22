import React, { Component } from 'react';
import JoblyApi from '../JoblyApi';
import Job from './Job';

export class Jobs extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       jobsList: []
    }
  }
  
  async componentDidMount() {
    let jobsList = await JoblyApi.getJobs();
    this.setState({jobsList})
  }

  render() {

    //const jobList = this.state.jobsList.map(j => <p>{j.title}</p>);
    const jobList = this.state.jobsList.map(j => <Job key={j.id} job={j} />);

    return (
      <div className="container">
        <h1> Jobs:</h1>
        {jobList}
      </div>
    )
  }
}

export default Jobs
