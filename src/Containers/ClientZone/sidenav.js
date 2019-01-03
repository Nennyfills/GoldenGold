

import React, { Component } from "react";
import { Nav, NavItem, NavLink, Collapse , ListGroup , ListGroupItem } from "reactstrap";

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
            <span> Account</span>{" "}
          </NavLink>
        </NavItem>
        <NavItem style={{}}>
          <NavLink href="/#/clientzone/payments" className="myNav">
            {" "}
            <i className="fas fa-credit-card p5" style={{}} /> <span> Payments</span>{" "}
          </NavLink>
        </NavItem>
        <NavItem style={{}}>
          <NavLink href="/#/clientzone/invoices" className="myNav">
            {" "}
            <i className="fas fa-magic p5" style={{}} /> <span> Invoices</span>{" "}
          </NavLink>
        </NavItem>
        <NavItem style={{}}>
          <NavLink href="/#/clientzone/quotes" className="myNav">
            {" "}
            <i className="fas fa-list p5" style={{}} /> <span> Quotes</span>{" "}
          </NavLink>
        </NavItem>
        <NavItem style={{}}>
          <NavLink href="/#/clientzone/support" className="myNav">
            {" "}
            <i className="fas fa-compass p5" style={{}} /> <span> Support</span>{" "}
          </NavLink>
        </NavItem>
       </Nav>
    );
  }
}

export default Sidenav;
