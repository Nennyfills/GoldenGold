import React, { Component } from "react";
import Header from "./header";
import Sidebar from "./sidenav";
import { Container, Row } from "reactstrap";
import {Redirect, Route,Switch } from "react-router";
import routes from "../../clientzoneroutes";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAdmin: sessionStorage.getItem("isAdmin")
      , isClient: sessionStorage.getItem("isClient")

    }
    this.uid =  sessionStorage.getItem("token");
  }

  componentDidMount(){

  }


  render() {
    let isAuth =false; if(this.state.isAdmin || this.state.isClient){
isAuth = true;
    }
    let y;
    {
      isAuth ? (
        y = 
        <div>
          <Header  id={this.uid} />
          <div className="wrapper">
            <nav id="sidebar">
              <Sidebar id={this.uid}/>
            </nav>
  
            <div id="content" style={{ backgroundColor: "#edf0f3" }}>
              <Row className="nomrow">
                <Container>
                  <Switch>
                    {routes.map((route, idx) => {
                      return route.component ? (
                        <Route
                          key={idx}
                          path={route.path}
                          exact={route.exact}
                          name={route.name}
                          render={props => <route.component {...props} />}
                        />
                      ) : null;
                    })}
                    <Redirect  to="/" />
                  </Switch>
                </Container>
              </Row>
            </div>
  
          </div>
        </div>
    
      ) : (
          y = <Redirect from="/clientzone"  to="/" />
        )
    }
    return (
      <div>
        {y}</div>
    );
  }
}

export default Home;
