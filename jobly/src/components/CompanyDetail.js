import React, { Component } from 'react';
import JoblyApi from '../JoblyApi';
import Job from './Job';


/**
 * will be passed in a company object as a prop
 * user the JoblyAPI to get all the jobs associated from this vcompany
 * list all the jobs out, pretty much copyPasta from Jobs
 */
export default class CompanyDetail extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      company: undefined
    }
  }

  async componentDidMount() {
    let company = await JoblyApi.getCompany(this.props.handle);
    this.setState({company})
  }
  
  render() {
    const { company } = this.state;
    // console.log(Date.now());
    // console.log(company);

    
    const jobList = this.state.company
      ? company.jobs.map(j => <Job key={j.id} job={j} />)
      : null;
    
    
    
    return (
      <div className="container">
        <h1>Jobs @ {company ? company.name : 'loading'}</h1>
        {jobList}
      </div>
    )
  }
}

// {jobList}