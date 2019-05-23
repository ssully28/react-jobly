import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import './NavBar.css';
import { getCurrentUser } from '../helpers';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.logUserOut = this.logUserOut.bind(this);
  }
  
  logUserOut() {
    window.localStorage.removeItem('joblyUser');
    this.forceUpdate();
    this.props.history.push("/");
  }

  render() {

    const user = getCurrentUser();

    const logInOrOut = user
      ? <button className="btn btn-link" onClick = {this.logUserOut}>Logout</button>
      : <NavLink className="mx-2" exact to="/login" activeClassName="active">Login</NavLink>
    
    return (
      <div className="row d-flex py-3 mb-5 align-items-center nav-div" >
        <h3 className="col-2" >  <NavLink exact to="/">Jobly</NavLink>  </h3>
        <nav className="nav-bar-custom col-10 pr-5 d-flex justify-content-end align-items-center" >
          <NavLink className="mx-2" exact to="/companies" activeClassName="active">Companies</NavLink>
          <NavLink className="mx-2" exact to="/jobs" activeClassName="active">Jobs</NavLink>
          { logInOrOut }
        </nav>
      </div>
    );
  }
}

export default withRouter(NavBar);