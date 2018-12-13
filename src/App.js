import React, { Component } from 'react';

import './App.css';
import {Home} from './Containers'
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Login,  Register } from './Containers/portal';

class App extends Component {

 

  render() {
    return (
      <HashRouter>
      <Switch>
        <Route exact path="/login" name="Login Page" component={Login} />
        <Route exact path="/register" name="Register Page" component={Register} />
        <Route path="/" name="Home" component={Home} />
      </Switch>
    </HashRouter>
     
    );
  }
}

export default App;
