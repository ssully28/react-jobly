import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import JoblyApi from '../JoblyApi';
import Job from './Job';

class Jobs extends Component {
	constructor(props) {
		super(props);

		this.state = {
      offset: 0,
			jobsList: [],
			errors: []
    };
    
    this.increaseOffset = this.increaseOffset.bind(this);
	}

	async componentDidMount() {
		try {
			let jobsList = await JoblyApi.getJobs(this.state.offset);
			this.setState({ jobsList });
		} catch (error) {
			let errors = [ ...this.state.errors, error ];
			this.setState({ errors });
			this.state.errors.push(error);
		}
  }

  async componentDidUpdate() {
    try {
			let jobsList = await JoblyApi.getJobs(this.state.offset);
			this.setState({ jobsList });
		} catch (error) {
			let errors = [ ...this.state.errors, error ];
			this.setState({ errors });
			this.state.errors.push(error);
		}
  }
  
  increaseOffset (bool) {
    if (bool) {
      this.setState(st => ({offset: st.offset + 20 }));
    } else {
      this.setState(st => ({offset: st.offset - 20 }));
    }
  }

	render() {
		if (this.state.errors.length) return <Redirect to="/login" />;
		const jobList = this.state.jobsList.map((j) => <Job key={j.id} job={j} />);

		return (
			<div className="container">
				<h1> Jobs:</h1>
        {jobList}

        <button 
          className="btn btn-primary mx-3"
          disabled={this.state.offset ? false : true}
          onClick={()=>this.increaseOffset(false)}
        > Back </button>

        <button className="btn btn-primary mx-3" onClick={()=>this.increaseOffset(true)}> Forward </button>

			</div>
		);
	}
}

export default Jobs;
