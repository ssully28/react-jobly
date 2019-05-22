import React, { Component } from 'react';
import JoblyApi from '../JoblyApi';
import Company from './Company';

export class Companies extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       companyList: []
    }
  }
  
  async componentDidMount() {
    let companyList = await JoblyApi.getCompanies();
    this.setState({companyList})
  }

  render() {

    //const jobList = this.state.jobsList.map(j => <p>{j.title}</p>);
    const companyList = this.state.companyList.map(c => <Company key={c.handle} company={c} />);

    return (
      <div className="container">
        <h1>Companies</h1>
        {companyList}
      </div>
    )
  }
}

export default Companies
