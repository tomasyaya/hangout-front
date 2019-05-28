import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser, login } from '../../redux/actions/actions';
import './login.css';

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
      <div className="login-main-container">
        <h3>Login</h3>
        <form  className="login-form" onSubmit={this.handleFormSubmit}>
          <input type="text" placeholder="username" name="username" value={username} onChange={this.handleChange}/>
          <input type="password" placeholder="password" name="password" value={password} onChange={this.handleChange} />
          <button type="submit">Go</button>
        </form>
        <div className="signup-link">
         You dont have an account? <Link to='/signup'>Signup</Link>
        </div>
      </div>
    )
  }
}




export default connect(null, { getUser, login })(Login);
