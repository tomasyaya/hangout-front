import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/actions';
import './navbar.css';

const Navbar = props => {
  const { user, logout, history: { goBack }, isLoggin } = props;

  const { username } = user;

  return (
  <div className="navbar">
    <p onClick={goBack}>
      Back
    </p>
    <p>Welcome { username } </p>
    <p onClick={logout}>Logout</p>
  </div>
  )
}

const mapStateToProps = state => {
  return{
    user: state.auth.user,
    isLoggin: state.auth.isLoggin
  }
}

export default connect(mapStateToProps, { logout })(withRouter(Navbar));