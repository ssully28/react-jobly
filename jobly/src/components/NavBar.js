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
			<ul className="navbar-nav ml-auto">
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
		);
	}

	loggedOutNav() {
		return (
			<ul className="navbar-nav ml-auto">
				<li className="nav-item mr-4">
					<Link className="nav-link" to="/Login">
						Log In
					</Link>
				</li>
			</ul>
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
