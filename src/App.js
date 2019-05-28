import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import authService from './lib/auth-service';
import PrivateRoute from './components/routes/PrivateRoute';
import AnonRoute from './components/routes/AnonRoute';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Private from './pages/Private';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';


const App = () => {

  // useEffect(() => {
  //   (async() => {
  //     await authService.logout()
  //   })()
  // }, [])

  return (
    <div className="container">
      <Navbar />
      <Switch>
        <AnonRoute path="/signup" component={ Signup } />
        <AnonRoute path="/login" component={ Login } />
        <PrivateRoute path="/private" component={ Private } />
        <PrivateRoute exact path="/" component={ Home } />
      </Switch>
    </div>
  )
}



export default App;
