import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
    import { Route , withRouter, Redirect} from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.logout = this.logout.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      ret =  ()=>{
        sessionStorage.clear();

      }
      
      logout(){
        this.ret()    
        this.setState({redirect:true})   
      }
  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/'/>;
    }
    return (
        <Navbar color=""  className="naf"  style={{backgroundColor:"#00a0df", zIndex:"50"}} light expand="md">
                <i id="sidebarCollapse" className="fas fa fa-bars"></i>               
                <div style={{marginLeft:"25px"}} className="font-weight-bolder white-text" ><a href={"/clientzone/" + this.props.id
              
              }  className="font-weight-bolder white-text">ISP-TEMPLATE</a> </div>

          <NavbarToggler onClick={this.toggle} className="mr-2" />       
          
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>                     
           
            
              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="white-text font-weight-bold">
                  user
                </DropdownToggle>
                <DropdownMenu right className="light-blue">
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <a onClick={this.logout}>Exit</a>
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
