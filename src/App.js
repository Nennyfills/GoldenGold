import React, { Component } from 'react';

import './App.css';
import {Home} from './Containers'
import { HashRouter, Route, Switch  } from 'react-router-dom';
import { Login,  Register } from './Containers/portal';


 function AppSwitch(props) {
  let isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) 
  {
    return ( <HashRouter>
      <Switch>
        <Route exact path="/login" name="Login Page" component={Login} />
        <Route exact path="/register" name="Register Page" component={Register} />
        <Route path="/" name="Home" component={Home} />
      </Switch>
    </HashRouter>)
  }
  return ( <HashRouter>
    <Switch>
      <Route exact path="/" name="Login Page" component={Login} />
      <Route exact path="/register" name="Register Page" component={Register} />
      <Route path="/dashboard" name="Home" component={Home} />
    </Switch>
  </HashRouter>)
}

class App extends Component {
    constructor(props){
      super(props)
      this.state={
        isLoggedIn:sessionStorage.getItem("isLoggedIn")
      }
    }


  render() {
    return (
     <AppSwitch isLoggedIn ={this.state.isLoggedIn}/>   
    );
  }
}

export default App;
