import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const ACTIVE_STYLES = {
  fontWeight: "bold"
};

export default class NavBar extends Component {
  render() {

    return (
      <nav className="nav-bar-custom d-flex justify-content-around" >
        <NavLink exact to="/" activeStyle={ACTIVE_STYLES}>Home</NavLink>
        <NavLink exact to="/companies" activeStyle={ACTIVE_STYLES}>Companies</NavLink>
        <NavLink exact to="/jobs" activeStyle={ACTIVE_STYLES}>Jobs</NavLink>
        <NavLink exact to="/bresaola" activeStyle={ACTIVE_STYLES}>Bresaola</NavLink>
      </nav>
    )
  }
}
