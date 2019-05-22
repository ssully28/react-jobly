import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Jobs from './Jobs';
import Companies from './Companies';
import NavBar from './NavBar';

export class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
        <NavBar />
          <Switch>
            <Route exact path="/jobs" render={ () => <Jobs />} />
            <Route exact path="/companies" render={ () => <Companies />} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default Routes
