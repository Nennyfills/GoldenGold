import React, { Component } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Collapse,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import "./sidenav.css";

class Sidenav extends Component {
  constructor(props) {
    super(props);
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

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };
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
          <NavLink href="/admin/clients" className="myNav">
            {" "}
            <i className="fas fa-user p5" style={{}} /> <span> Clients</span>{" "}
          </NavLink>
        </NavItem>
        <NavItem style={{}}>
          <NavLink href="/admin/billing" className="myNav">
            {" "}
            <i className="fas  fa-credit-card p5" style={{}} />{" "}
            <span> Billing</span>{" "}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" onClick={this.toggle}>
            <i className="fas fa-network-wired p5" style={{}} />{" "}
            <span className="mr-4"> Network</span>{" "}
            <i className={this.handleArrow()} />
          </NavLink>
          <Collapse isOpen={this.state.collapse}>
            <NavLink href="/admin/sites" className="networkStyle">
              <span> Sites </span>
            </NavLink>
            <NavLink href="/admin/devices" className="networkStyle">
              <span> Devices </span>
            </NavLink>
            <NavLink href="/admin/site" className="networkStyle">
              <span> Outages </span>
            </NavLink>
            <NavLink href="/admin/site" className="networkStyle">
              <span> Unknown devices </span>
            </NavLink>
            <NavLink href="/admin/site" className="networkStyle">
              <span> Network map </span>
            </NavLink>
          </Collapse>
        </NavItem>
        <NavItem style={{}}>
          <NavLink className="myNav" onClick={this.toggle}>
            {" "}
            <i className="fas  fa fa-toolbox p5" style={{}} />{" "}
            <span> Systems</span>{" "}
          </NavLink>
          <Collapse isOpen={this.state.collapse} className="sub-menu">
            <ListGroup>
              <ListGroupItem>
                {" "}
                <a href="/admin/system/prefs">Preferences </a>
              </ListGroupItem>

              <ListGroupItem>
                {" "}
                <a href="/admin/system/products"> Products </a>
              </ListGroupItem>
              <ListGroupItem>
                {" "}
                <a href="/admin/system/services">Services </a>{" "}
              </ListGroupItem>
              <ListGroupItem>
                {" "}
                <a href="/admin/system/logs">Logs </a>
              </ListGroupItem>
            </ListGroup>
          </Collapse>
        </NavItem>
      </Nav>
    );
  }
}

export default Sidenav;
