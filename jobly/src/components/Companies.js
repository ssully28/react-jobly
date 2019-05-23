import React, { Component } from 'react';
import JoblyApi from '../JoblyApi';
import { Redirect } from 'react-router-dom';
import Company from './Company';

class Companies extends Component {
	constructor(props) {
		super(props);

		this.state = {
      companyList: [],
      errors: []
		};
	}

	async componentDidMount() {
		try {
			let companyList = await JoblyApi.getCompanies();
			this.setState({ companyList });
		} catch (error) {
			let errors = [ ...this.state.errors, error ];
			this.setState({ errors });
			this.state.errors.push(error);
		}
	}

	render() {
		if (this.state.errors.length) return <Redirect to="/login" />;
		const companyList = this.state.companyList.map((c) => <Company key={c.handle} company={c} />);

		return (
			<div className="container">
				<h1>Companies</h1>
				{companyList}
			</div>
		);
	}
}

export default Companies;
