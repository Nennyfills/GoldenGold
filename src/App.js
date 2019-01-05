import React, { Component } from 'react';

import './App.css';
import { Home, ClientZone } from './Containers'
import { Route, Switch,  BrowserRouter as Router } from 'react-router-dom';
import { Login, Register } from './Containers/portal';



class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact="true" path="/" component={Login} />
          <Route path="/clientzone" component={ClientZone} />
          <Route path="/admin" component={Home} />
          <Route component={ () => {return <h1>NOT FOUND</h1>}} />
        </Switch>
      </Router>
    );
  }
}

export default App;
