<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component } from "react";
import { Nav, NavItem, NavLink, Collapse } from "reactstrap";
import "./sidenav.css";

class Sidenav extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      arrowUp: "fas fa-angle-up",
      arrowDown: "fas fa-angle-down"
    };
  }
  handleArrow() {
    let arrow = "mr-5 fas fa-angle-";
    const { collapse } = this.state;
    arrow += collapse === false ? "up" : "down";
    return arrow;
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
    return (
      <Nav vertical className="navContainer">
        <NavItem style={{}}>
          <NavLink href="/" className="myNav">
            {" "}
            <i className="fa fa-barcode p5" style={{}} />{" "}
            <span> Dashboard</span>{" "}
          </NavLink>
        </NavItem>
        <NavItem style={{}}>
          <NavLink href="/#clients" className="myNav">
            {" "}
            <i className="fas fa-user p5" style={{}} /> <span> Clients</span>{" "}
          </NavLink>
        </NavItem>
        <NavItem style={{}}>
          <NavLink href="/#billing" className="myNav">
            {" "}
            <i className="fas  fa-credit-card p5" style={{}} />{" "}
            <span> Billing</span>{" "}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            // activeStyle={{ backgroundColor: "#1e201e" }}
            href="#"
            onClick={this.toggle}
          >
            <i className="fas fa-network-wired p5" style={{}} />{" "}
            <span className="mr-4"> Network</span>{" "}
            <i className={this.handleArrow()} />
          </NavLink>
          <Collapse isOpen={this.state.collapse}>
            <NavLink href="/#/sites" className="networkStyle">
              <span> Sites </span>
            </NavLink>
            <NavLink href="/#site" className="networkStyle">
              <span> Devices </span>
            </NavLink>
            <NavLink href="/#site" className="networkStyle">
              <span> Outages </span>
            </NavLink>
            <NavLink
              //   style={{ color: "#82867B" }}
              href="/#site"
              className="networkStyle"
            >
              <span> Unknown devices </span>
            </NavLink>
            <NavLink
              //   style={{ color: "#82867B" }}
              href="/#site"
              className="networkStyle"
            >
              <span> Network map </span>
            </NavLink>
          </Collapse>
        </NavItem>
      </Nav>
    );
  }
}

export default Sidenav;
=======
=======
>>>>>>> cdbe8602ef75fa1449d2b21ea50be7cb9202bc6a
import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Collapse, ListGroup, ListGroupItem } from 'reactstrap';


class Sidenav extends Component {

    constructor(props){
        super(props)
        
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
}

toggle() {
  this.setState({ collapse: !this.state.collapse });
}

    render() {
        return (
                <Nav vertical className="navContainer">
                   <NavItem style={{  }}>
                        <NavLink href="/" className="myNav"> <i class="fa fa-barcode p5" style={{ }}></i> <span> Dashboard</span> </NavLink>
                    </NavItem>
                    <NavItem style={{  }}>
                        <NavLink href="/#clients" className="myNav"> <i class="fas fa-user p5" style={{ }}></i> <span> Clients</span> </NavLink>
                    </NavItem>
                    <NavItem style={{  }}>
                        <NavLink href="/#billing" className="myNav"> <i class="fas  fa-credit-card p5" style={{ }}></i> <span> Billing</span> </NavLink>
                    </NavItem>
                    <NavItem style={{  }}>
                    <NavLink  className="myNav" onClick={this.toggle}> <i class="fas  fa fa-toolbox p5" style={{ }}></i> <span> Systems</span> </NavLink>
                    <Collapse isOpen={this.state.collapse} className="sub-menu">
                    <ListGroup>
                    <ListGroupItem> <a href="#/system/prefs">Preferences </a></ListGroupItem>

        <ListGroupItem> <a href="#/system/products"> Products </a></ListGroupItem>
        <ListGroupItem> <a href="#/system/services">Services </a> </ListGroupItem>
        <ListGroupItem> <a href="#/system/logs">Logs </a></ListGroupItem>
       
      </ListGroup>
        </Collapse>

                                   </NavItem>

                </Nav>
        );
    }
}

export default Sidenav;
<<<<<<< HEAD
>>>>>>> b48d507413b99f0f9f1eaf49811d48eb065aa555
=======
=======
import React, { Component } from "react";
import { Nav, NavItem, NavLink, Collapse } from "reactstrap";
import "./sidenav.css";

class Sidenav extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      arrowUp: "fas fa-angle-up",
      arrowDown: "fas fa-angle-down"
    };
  }
  handleArrow() {
    let arrow = "mr-5 fas fa-angle-";
    const { collapse } = this.state;
    arrow += collapse === false ? "up" : "down";
    return arrow;
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
    return (
      <Nav vertical className="navContainer">
        <NavItem style={{}}>
          <NavLink href="/" className="myNav">
            {" "}
            <i className="fa fa-barcode p5" style={{}} />{" "}
            <span> Dashboard</span>{" "}
          </NavLink>
        </NavItem>
        <NavItem style={{}}>
          <NavLink href="/#clients" className="myNav">
            {" "}
            <i className="fas fa-user p5" style={{}} /> <span> Clients</span>{" "}
          </NavLink>
        </NavItem>
        <NavItem style={{}}>
          <NavLink href="/#billing" className="myNav">
            {" "}
            <i className="fas  fa-credit-card p5" style={{}} />{" "}
            <span> Billing</span>{" "}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            // activeStyle={{ backgroundColor: "#1e201e" }}
            href="#"
            onClick={this.toggle}
          >
            <i className="fas fa-network-wired p5" style={{}} />{" "}
            <span className="mr-4"> Network</span>{" "}
            <i className={this.handleArrow()} />
          </NavLink>
          <Collapse isOpen={this.state.collapse}>
            <NavLink href="/#/sites" className="networkStyle">
              <span> Sites </span>
            </NavLink>
            <NavLink href="/#site" className="networkStyle">
              <span> Devices </span>
            </NavLink>
            <NavLink href="/#site" className="networkStyle">
              <span> Outages </span>
            </NavLink>
            <NavLink
              //   style={{ color: "#82867B" }}
              href="/#site"
              className="networkStyle"
            >
              <span> Unknown devices </span>
            </NavLink>
            <NavLink
              //   style={{ color: "#82867B" }}
              href="/#site"
              className="networkStyle"
            >
              <span> Network map </span>
            </NavLink>
          </Collapse>
        </NavItem>
      </Nav>
    );
  }
}

export default Sidenav;
>>>>>>> d9003451882b9b472ef914f5fa5b440bf1b17159
>>>>>>> cdbe8602ef75fa1449d2b21ea50be7cb9202bc6a
