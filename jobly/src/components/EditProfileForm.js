import React, { Component } from 'react';

const formFieldArr = [
  ['username', 'Username'],
  ['password', 'Password'],
  ['email', 'Email'],
  ['first_name', 'First Name'],
  ['last_name', 'Last Name'],
  ['photo_url', 'photo_url']
]

class EditProfileForm extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      username: this.props.user.username || '',
      email: this.props.user.email || '',
      first_name: this.props.user.first_name || '',
      last_name: this.props.user.first_name || '',
      photo_url: this.props.user.photo_url || '',
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
    let formToShow = formFieldArr.map(field => (
      <div className="form-group row" key={field[0]} >
        <label className="col-3" htmlFor={field[0]}> {field[1]} </label>
        <input
          id={field[0]}
          onChange={this.handleChange}
          value={this.state[field[0]]}
          type="text"
          name={field[0]}
          className="form-control col-9"
          required
        />
      </div>
    ));
    console.log('l0l trying to render derp..');
    console.log(this.state);

    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          {formToShow}
        </form>
      </div>
    )
  }
}

export default EditProfileForm;