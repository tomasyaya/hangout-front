import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser, login } from '../redux/actions/actions';


class Login extends Component {
  state = {
    username: "",
    password: "",
  }

  handleFormSubmit = async event => {
    event.preventDefault();
    const { username, password } = this.state;
    const { getUser, login } = this.props;
    try {
      await login({ username, password })
      await getUser()
    }
    catch(err) {
      console.log(err)
    }
  }

  handleChange = event => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Username:</label>
        <input type="text" name="username" value={username} onChange={this.handleChange}/>
        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={this.handleChange} />
        <input type="submit" value="Login" />
      </form>
    )
  }
}




export default connect(null, { getUser, login })(Login);
