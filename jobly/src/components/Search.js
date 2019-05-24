import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleSubmit(evt) {
		evt.preventDefault();
		await this.props.handleSearch(this.state.search);
    this.setState({ search: "" });
    let searchBar = document.getElementById('search-bar');
    searchBar.value = '';
    this.props.history.push('/search');
	}

	handleChange(evt) {
		this.setState({ search: evt.target.value });
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} className="form-inline my-2 my-lg-0 ml-auto">
				<input className="form-control mr-sm-2" id="search-bar" type="search" onChange={this.handleChange} name="search" placeholder="Search" aria-label="Search" />
				<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
					Search
				</button>
			</form>
		);
	}
}

export default withRouter(Search);
