import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Jobs from './Jobs';
import Home from './Home';
import Login from './Login';
import Companies from './Companies';
import CompanyDetail from './CompanyDetail';
import NavBar from './NavBar';
import SearchResults from './SearchResults';
import Profile from './Profile';
import JoblyApi from '../JoblyApi';

class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      searchResults: {jobs: [], companies: []},
    }

    this.setAuthUser = this.setAuthUser.bind(this);
    this.logOut = this.logOut.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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
      this.setState({ user }); 
    } catch (err) {
      console.log("ERROR:", err);
    }

  }

  async handleSearch(search) {
    let searchResults = await JoblyApi.search(search);
    console.log(searchResults);
    
    this.setState({ searchResults });
  }

  logOut() {
    window.localStorage.removeItem('joblyUser');
    this.setState({user: null});
    this.forceUpdate();
  }

  render() {
    const companyDetail = props => {
      const { handle } = props.match.params;
      return <CompanyDetail handle={handle} username={this.state.user.username} />
    }

    return (
      <BrowserRouter>
      <NavBar handleSearch={this.handleSearch} logOut={this.logOut} />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/login" render={(rtProps) => <Login {...rtProps} setAuthUser={this.setAuthUser} />} />
          <Route exact path="/jobs" render={() => <Jobs />} />
          <Route exact path="/companies" render={() => <Companies />} />
          <Route exact path="/profile" render={(rtProps) => <Profile {...rtProps} />} />
          <Route exact path="/search" render={(rtProps) => <SearchResults searchResults={this.state.searchResults} {...rtProps} />} />
          <Route exact path="/companies/:handle" render={companyDetail} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
