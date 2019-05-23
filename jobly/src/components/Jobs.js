import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import JoblyApi from '../JoblyApi';
import Job from './Job';

class Jobs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			jobsList: [],
			errors: []
		};
	}

	async componentDidMount() {
		try {
			let jobsList = await JoblyApi.getJobs();
			this.setState({ jobsList });
		} catch (error) {
			let errors = [ ...this.state.errors, error ];
			this.setState({ errors });
			this.state.errors.push(error);
		}
	}

	render() {
		if (this.state.errors.length) return <Redirect to="/login" />;
		const jobList = this.state.jobsList.map((j) => <Job key={j.id} job={j} />);

		return (
			<div className="container">
				<h1> Jobs:</h1>
				{jobList}
			</div>
		);
	}
}

export default Jobs;
