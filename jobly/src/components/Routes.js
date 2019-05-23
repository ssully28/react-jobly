import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Jobs from './Jobs';
import Home from './Home';
import Login from './Login';
import Companies from './Companies';
import CompanyDetail from './CompanyDetail';
import NavBar from './NavBar';
import Profile from './Profile';
import JoblyApi from '../JoblyApi';

class Routes extends Component {
  constructor(props) {
    super(props);

    this.setAuthUser = this.setAuthUser.bind(this);
  }

  async setAuthUser(userState) {

    try {
      let result;

      if (userState.isSignUp) {
        let paramObj = userState;
        delete paramObj.isSignUp;
        result = await JoblyApi.register(paramObj);
      } else {
        const paramObj = {
          username: userState.username,
          password: userState.password
        };
        result = await JoblyApi.login(paramObj);
      }

      let user = {
        _token: result,
        username: userState.username
      };

      window.localStorage.setItem('joblyUser', JSON.stringify(user));
      this.forceUpdate();
    } catch (err) {
      console.log("ERROR:", err);
    }

  }

  render() {
    const companyDetail = props => {
      const { handle } = props.match.params;
      return <CompanyDetail handle={handle} />
    }

    return (
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/login" render={(rtProps) => <Login {...rtProps} setAuthUser={this.setAuthUser} />} />
          <Route exact path="/jobs" render={() => <Jobs />} />
          <Route exact path="/companies" render={() => <Companies />} />
          <Route exact path="/profile" render={(rtProps) => <Profile {...rtProps} />} />
          <Route exact path="/companies/:handle" render={companyDetail} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
