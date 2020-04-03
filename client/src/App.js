import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthState from './components/context/auth/AuthState';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import SecureRoute from './components/secureRoutes/SecureRoute';

function App() {
  return (
    <AuthState>
      <Router>
        <Switch>
          <SecureRoute exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </AuthState>
  );
}

export default App;
