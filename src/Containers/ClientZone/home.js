import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidenav";
import { Container, Row } from "reactstrap";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "../../clientzoneroutes";
class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isAdmin: sessionStorage.getItem("isAdmin")
      , isClient: sessionStorage.getItem("isClient")

    }
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
          <Header />
          <div className="wrapper">
            <nav id="sidebar">
              <Sidebar />
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
                    <Redirect from="/clientzone" to="/overview" />
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
