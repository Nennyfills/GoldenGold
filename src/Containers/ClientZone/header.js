import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, Input,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
    

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      
  render() {
    return (
        <Navbar color=""  className="naf"  style={{backgroundColor:"#00a0df", color:"white !important", zIndex:"50"}} light expand="md">

                <i id="sidebarCollapse" className="fas fa fa-bars"></i>
               
            <div style={{color:"white" , marginLeft:"25px"}} href="/">ISP-TEMPLATE</div>
        
          <NavbarToggler onClick={this.toggle} className="mr-2" />       
          
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>                     
              <NavItem>
                <NavLink href="/help">Help</NavLink>
              </NavItem>
            
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <span><i className="fa fa-user"></i> </span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

export default Header;
