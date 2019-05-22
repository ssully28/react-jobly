import React, { Component } from 'react';

export default class EditProfileForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       email: '',
       first_name: '',
       last_name: '',
       photo_url: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
		e.preventDefault();
		this.props.updateUser(this.state);
	}

  handleChange(e) {
  	this.setState({
			[e.target.name]: e.target.value
		});
	}
  

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
