import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/actions';

const Navbar = props => {
  const { isLogged, user, logout } = props;
  const { username } = user;
  if (isLogged) {
    return <div>
      <p>username: { username }</p>
      <p onClick={logout}>Logout</p>
    </div>
  } else {
    return <div>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Signup</Link>
    </div>
  }
}

const mapStateToProps = state => {
  return{
    isLogged: state.auth.isLoggin,
    user: state.auth.user
  }
}

export default connect(mapStateToProps, { logout })(Navbar);