import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import authService from './lib/auth-service';
import Footer from './components/footer/Footer';
import PrivateRoute from './components/routes/PrivateRoute';
import AnonRoute from './components/routes/AnonRoute';
import Create from './pages/create/Create';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Private from './pages/Private';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import './App.css';


const App = props => {
  const { isLoggin } = props;

  // useEffect(() => {
  //   (async() => {
  //     await authService.logout()
  //   })()
  // }, [])
  const navbar = isLoggin ? <Navbar /> : null;
  const footer = isLoggin ? <Footer /> : null;
  return (
    <div className="container">
      { navbar }
      <Switch>
        <AnonRoute path="/signup" component={ Signup } />
        <AnonRoute path="/login" component={ Login } />
        <PrivateRoute path="/create" component={ Create } />
        <PrivateRoute path="/private" component={ Private } />
        <PrivateRoute exact path="/" component={ Home } />
      </Switch>
      { footer }
    </div>
  )
}

const mapStateToProps = state => {
  return{
    isLoggin: state.auth.isLoggin 
  }
}

export default connect(mapStateToProps, null)(App);
