import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../redux/actions/actions';


const PrivateRoute = props => {
  const { component: Component, isLogged, getUser, ...rest } = props;
  const [ load, setLoad ] = useState(false)

  useEffect(() => {
    ( async() => {
      try{
        await getUser()
        setLoad(true)
      }
      catch(err) {
        console.log(err)
      }
    })()
  }, [])

const displayRoute = load ? <Route {...rest} 
  render={props => isLogged ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
  /> : null;
      
  return (
    <div>
      { displayRoute }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    isLogged: state.auth.isLoggin
  }
}


export default connect(mapStateToProps, { getUser })(PrivateRoute);