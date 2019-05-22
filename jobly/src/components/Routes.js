import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Jobs from './Jobs';
import Home from './Home';
import Login from './Login';
import Companies from './Companies';
import CompanyDetail from './CompanyDetail';
import NavBar from './NavBar';

export class Routes extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      user: undefined,
    }
    this.setAuthUser = this.setAuthUser.bind(this);
  }

  setAuthUser() {

  }
  

  render() {
    const companyDetail = props => {
      const { handle } = props.match.params;
      return <CompanyDetail handle={handle}/>
    }

    return (
      <React.Fragment>
        <BrowserRouter>
        <NavBar />
          <Switch>
            <Route exact path="/" render={ () => <Home />} />
            <Route exact path="/login" render={ () => <Login setAuthUser={this.setAuthUser} />} />
            <Route exact path="/jobs" render={ () => <Jobs />} />
            <Route exact path="/companies" render={ () => <Companies />} />
            <Route exact path="/companies/:handle" render={companyDetail} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default Routes
