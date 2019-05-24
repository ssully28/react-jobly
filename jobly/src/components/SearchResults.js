import React, { Component } from 'react';
import Job from './Job';
import Company from './Company';

class SearchResults extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      results:  {jobs: [], companies: []},
    }
  }

  componentDidMount() {
    this.setState({results: this.props.searchResults})
  }
  
  componentDidUpdate() {
    if (this.state.results !== this.props.searchResults) {
      this.setState({results: this.props.searchResults});
    }
  }
  
  render() {
    // console.log(this.props);
    // console.log(this.state);
    // just for show L0L
    const jobList = this.state.results.jobs.length
      ? this.state.results.jobs.map((j) => <Job key={j.id} job={j} />)
      : null;

    const compList = this.state.results.companies.length
      ? this.state.results.companies.map((c) => <Company key={c.handle} company={c} />)
      : null;

    return (
      <div>
        <h1> Jobs </h1>
        {jobList}
        <h1> Companies </h1>
        {compList}
      </div>
    )
  }
}

export default SearchResults;