import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
}

export default App;
