import React, { Component } from 'react';
import JoblyApi from '../JoblyApi';
import Job from './Job';


/**
 * will be passed in a company object as a prop
 * user the JoblyAPI to get all the jobs associated from this vcompany
 * list all the jobs out, pretty much copyPasta from Jobs
 */
class CompanyDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: null
    };
  }

  async componentDidMount() {
    console.log(this.props.username);
    
    let company = await JoblyApi.getCompany(this.props.handle, this.props.username);
    this.setState({ company });
  }

  render() {
    const { company } = this.state;
    console.log('companyDetail: username: ',this.props.username);
    console.log('CompanyDetail - company: ', company);
    

    const jobList = this.state.company
      ? company.jobs.map(j => <Job key={j.id} job={j} />)
      : null;

    return (
      <div className="container">
        <h1>Jobs @ {company ? company.name : 'loading'}</h1>
        {jobList}
      </div>
    );
  }
}

export default CompanyDetail;