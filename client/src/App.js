import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={['/', '/signup']} component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
