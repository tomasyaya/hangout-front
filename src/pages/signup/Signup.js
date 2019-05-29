import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser, login } from '../../redux/actions/actions';


class Signup extends Component {

  state = {
    username: "",
    password: "",
  };

  handleFormSubmit = async event => {
    event.preventDefault();
    const { username, password } = this.state;
    const { getUser, login } = this.props;
    if(!username || !password) {
      return
    }
    try {
      await login({ username, password }, 'signup');
      await getUser();
    }
    catch(err) {
      console.log(err)
    }
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="login-main-container">
        <h3>Signup</h3>
        <form className="login-form" onSubmit={this.handleFormSubmit}>
          <input type="text" placeholder="username" name="username" value={username} onChange={this.handleChange}/>
          <input type="password" placeholder="password" name="password" value={password} onChange={this.handleChange} />
          <button> Go </button>
        </form>
        <div className="signup-link">
          already have an account? <Link to={"/login"}> Login</Link>
        </div>
      </div>
    )
  }
}


export default connect(null, { getUser, login  })(Signup);