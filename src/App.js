import React, { Component } from 'react';

import './App.css';
import { Home, ClientZone } from './Containers'
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Login, Register } from './Containers/portal';

function AppSwitch(props) {
  let isLoggedIn = props.isLoggedIn;
  let isadmin = props.isadmin;
  if (isLoggedIn) {
    if(isadmin){
      return (<HashRouter>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/clientzone" name="Client Zone" component={ClientZone} />
          <Route exact path="/register" name="Register Page" component={Register} />
          <Route path="/" name="Home" component={Home} />
        </Switch>
      </HashRouter>)
    }else{
      return (<HashRouter>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/clientzone" name="Client Zone" component={ClientZone} />
          <Route exact path="/register" name="Register Page" component={Register} />
          <Route path="/" name="Home" component={ClientZone} />
        </Switch>
      </HashRouter>)
    }
 
  } else {
    return (<HashRouter>
      <Switch>
        <Route exact path="/" name="Login Page" component={Login} />
        <Route exact path="/clientzone" name="Client Zone" component={ClientZone} />
        <Route exact path="/register" name="Register Page" component={Register} />
        <Route path="/dashboard" name="Home" component={Home} />
      </Switch>
    </HashRouter>)
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: sessionStorage.getItem("isLoggedIn"),
      isadmin: sessionStorage.getItem("isadmin")
    }
  }


  render() {
    return (
      <AppSwitch isLoggedIn={this.state.isLoggedIn} isadmin={this.state.isadmin} />
    );
  }
}

export default App;
