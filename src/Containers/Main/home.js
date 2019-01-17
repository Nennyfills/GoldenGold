import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidenav";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "../../routes";
import AppBreadcrumb from "../../Components/Breedcrumbs";
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAdmin: sessionStorage.getItem("isAdmin")
    }
  }

  render() {
    const isAuth = this.state.isAdmin;
    let y;
    {
      isAuth ? (
        y = <div>
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
                    <Route  to="/admin" />
                  </Switch>
                </Container>
              </Row>
            </div>
          </div>
        </div>
      ) : (
          y = <Redirect from="/admin" to="/" />
        )
      return (
        <div>{y}</div>
      );
    }
  }
}

export default Home;
