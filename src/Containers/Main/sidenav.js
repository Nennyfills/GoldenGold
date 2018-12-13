import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';


class Sidenav extends Component {
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

                </Nav>
        );
    }
}

export default Sidenav;
