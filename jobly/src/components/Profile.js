import React, { Component } from 'react';
import EditProfileForm from './EditProfileForm';
import JoblyApi from '../JoblyApi';
import jwt from 'jsonwebtoken';

export default class Profile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      user: jwt.decode(JSON.parse(localStorage.getItem('joblyUser'))._token),
    }

    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(formData) {
    // make our api call to update the user in the db
  }

  async componentDidMount() {
    const { username } = this.state.user;
    let user = await JoblyApi.getUser(username);
    this.setState({user})
  }

  render() {
    console.log(this.state.user);
    
    const { user } = this.state;
    const formToShow = (user.iat)
    ? null
    : <EditProfileForm user={user} updateUser={this.updateUser} />
    return (
      <div>
        {formToShow}
      </div>
    )
  }
}
