import React, { Component } from 'react';
import EditProfileForm from './EditProfileForm';
import JoblyApi from '../JoblyApi';

export default class Profile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      user: undefined,
    }

    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(formData) {
    // make our api call to update the user in the db
  }


  

  render() {
    const { user } = this.state;

    return (
      <div>
        <EditProfileForm user={user} updateUser={this.updateUser} />
      </div>
    )
  }
}
