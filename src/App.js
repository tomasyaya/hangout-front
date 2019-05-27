import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from './redux/actions/actions';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Navbar from './components/Navbar';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AuthProvider from './providers/AuthProvider';
import authService from './lib/auth-service';


const App = props => {

  const { getUser } = props;

  // useEffect( () => {
  //   ( async() => {
  //     try {
  //       // await authService.logout()
  //     await getUser()
  //     } catch(err) {
  //       console.log(err)
  //     }
  //   })()
  // }, [])

    console.log(props)
    return (
      <AuthProvider>
        <div className="container">
          <h1>Module 3 boilerplate</h1>
          <Navbar />
          <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
          </Switch>
        </div>
      </AuthProvider>
    )
  
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    isLoggin: state.auth.isLoggin
  }
}

export default connect(mapStateToProps, { getUser })(App);
