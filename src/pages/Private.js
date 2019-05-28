import React from 'react';
import { connect } from 'react-redux';


const Private = () => {
  return (
    <div>
      <h1>Welcome </h1>
    </div>
  )
}

const mapStateToPros = state => {
  return {
    isLogged: state.auth.isLoggin
  }
}
export default connect(mapStateToPros, null)(Private)