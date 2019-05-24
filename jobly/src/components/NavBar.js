import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './NavBar.css';
import { getCurrentUser } from '../helpers';

class NavBar extends Component {
	constructor(props) {
		super(props);

		this.logUserOut = this.logUserOut.bind(this);
		this.loggedInNav = this.loggedInNav.bind(this);
		this.loggedOutNav = this.loggedOutNav.bind(this);
	}

	logUserOut() {
    this.props.logOut();
		this.forceUpdate();
		this.props.history.push('/');
	}

	loggedInNav() {
		return (
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav">
					<li className="nav-item mr-4">
						<NavLink className="nav-link" to="/companies" activeClassName="active">
							Companies
						</NavLink>
					</li>
					<li className="nav-item mr-4">
						<NavLink className="nav-link" to="/jobs" activeClassName="active">
							Jobs
						</NavLink>
					</li>
					<li className="nav-item mr-4">
							<Link className="nav-link" to="/" onClick={this.logUserOut}>
								Log Out
							</Link>
					</li>
				</ul>
				<form class="form-inline my-2 my-lg-0 ml-auto">
						<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
						<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
					</form>
			</div>
		);
	}

	loggedOutNav() {
		return (
			<div className="collapse navbar-collapse" id="navbarSupportedContent">

				<ul className="navbar-nav ml-auto">
					<li className="nav-item mr-4">
						<Link className="nav-link" to="/Login">
							Log In
						</Link>
					</li>
				</ul>
			</div>
		);
	}

	render() {
		const user = getCurrentUser();

		const logInOrOut = user ? this.loggedInNav() : this.loggedOutNav();

		return (
			<nav className="nav-bar-custom navbar navbar-expand-md mb-3">
          <Link className="navbar-brand" to="/">
            Jobly
          </Link>
					{logInOrOut}
		</nav>

		);
	}
}

export default withRouter(NavBar);
