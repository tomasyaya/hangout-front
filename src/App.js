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


const App = () => {
  return (
    <div className="container">
      <h1>Module 3 boilerplate</h1>
      <Navbar />
      <Switch>
        <AnonRoute path="/signup" component={Signup} />
        <AnonRoute path="/login" component={Login} />
        <PrivateRoute path="/private" component={Private} />
      </Switch>
    </div>
  )
}



export default App;
