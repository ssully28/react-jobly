import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import JoblyApi from '../JoblyApi';
import Job from './Job';
import './Jobs.css';

class Jobs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			offset: 0,
			jobCount: 0,
			jobList: [],
			errors: []
		};

		this.increaseOffset = this.increaseOffset.bind(this);
	}

	async componentDidMount() {
		try {
			let jobList = await JoblyApi.getJobs(this.state.offset);
			let jobCount = await JoblyApi.getJobsCount();
			this.setState({ jobList, jobCount });
		} catch (error) {
			let errors = [ ...this.state.errors, error ];
			this.setState({ errors });
			this.state.errors.push(error);
		}
	}

	// async componentDidUpdate() {
	// }

	async increaseOffset(bool) {
		try {
			if (bool) {
				const jobList = await JoblyApi.getJobs(this.state.offset + 20);

				this.setState((st) => ({
					offset: st.offset + 20,
					jobList: jobList
				}));
			} else {
				const jobList = await JoblyApi.getJobs(this.state.offset - 20);

				this.setState((st) => ({
					offset: st.offset - 20,
					jobList: jobList
				}));
			}
		} catch (error) {
			let errors = [ ...this.state.errors, error ];
			this.setState({ errors });
			this.state.errors.push(error);
		}
	}

	render() {
		if (this.state.errors.length) return <Redirect to="/login" />;
		const jobList = this.state.jobList.map((j) => <Job key={j.id} job={j} />);

		const buttons = (
			<div>
				<button
					className="btn btn-primary mx-3"
					disabled={this.state.offset ? false : true}
					onClick={() => this.increaseOffset(false)}
				>
					{' '}
					Back{' '}
				</button>

				<button
					className="btn btn-primary mx-3"
					onClick={() => this.increaseOffset(true)}
					disabled={this.state.jobCount - this.state.offset <= 20 ? true : false}
				>
					{' '}
					Forward{' '}
				</button>
			</div>
		);

		return (
			<div className="container">
        <div className="top-div d-flex justify-content-center">

          <h1 className="position-relative" > Jobs </h1>
          <span className="ml-auto" >
            { buttons }
          </span>
        </div>
        {jobList}
        <div className="mb-5" >
          { buttons }
        </div>
      </div>
		);
	}
}

export default Jobs;
