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
