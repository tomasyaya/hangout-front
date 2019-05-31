import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser, login } from '../../redux/actions/actions';
import { handleChange } from '../../redux/actions/formActions';
import './login.css';

const Login = props => {
  const { handleChange, body: { password, username } } = props;
  
  const handleFormSubmit = async event => {
    event.preventDefault();
    const { getUser, login, body: { username, password } } = props;
    if(!username || !password) {
      return
    }
    try {
      await login({ username, password })
      await getUser()
    }
    catch(err) {
      console.log(err)
    }
  }
   
  return (
    <div className="login-main-container">
      <h3>Login</h3>
      <form  className="login-form" onSubmit={ handleFormSubmit }>
        <input type="text" placeholder="username" name="username" value={ username } onChange={ handleChange }/>
        <input type="password" placeholder="password" name="password" value={ password } onChange={ handleChange } />
        <button type="submit">Go</button>
      </form>
      <div className="signup-link">
        You dont have an account? <Link to='/signup'>Signup</Link>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    body: state.form.body
  }
}

export default connect(mapStateToProps, { getUser, login, handleChange })(Login);
