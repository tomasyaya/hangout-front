import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withAuth } from '../providers/AuthProvider';

class Private extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Welcome </h1>
      </div>
    )
  }
}

const mapStateToPros = state => {
  return {
    isLogged: state.auth.isLoggin
  }
}
export default connect(mapStateToPros, null)(Private)