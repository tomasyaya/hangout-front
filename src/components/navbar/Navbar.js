import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/actions';
import './navbar.css';

const Navbar = props => {
  const { isLogged, user, logout } = props;
  console.log(user)
  if (isLogged) {
    const { username } = user;
    return (
    <div className="navbar">
      <p>Welcome { username } </p>
      <p onClick={logout}>Logout</p>
    </div>
    )
  } 
  else {
    return <div>
      
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