import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser, login } from '../../redux/actions/actions';
import { handleChange } from '../../redux/actions/formActions';


const Signup = props => {

  const { handleChange, body: { password, username } } = props;

  const handleFormSubmit = async event => {
    event.preventDefault();
    const { getUser, login } = props;
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

  return (
    <div className="login-main-container">
      <h3>Signup</h3>
      <form className="login-form" onSubmit={ handleFormSubmit }>
        <input type="text" placeholder="username" name="username" value={ username } onChange={ handleChange }/>
        <input type="password" placeholder="password" name="password" value={ password } onChange={ handleChange } />
        <button> Go </button>
      </form>
      <div className="signup-link">
        already have an account? <Link to={"/login"}> Login</Link>
      </div>
    </div>
  )
}


const mapStateToProps = state => {
  return{
    body: state.form.body
  }
}

export default connect(mapStateToProps, { getUser, login, handleChange  })(Signup);