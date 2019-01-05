import React, { Component } from 'react'
import { CardBody, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, CardHeader, CardFooter, Row, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import Header from './Components/Header'
import { InvoiceTable } from '../../Operations/Invoices';
import { invoices } from '../../db'


class Invoices extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);

        this.state = {
            user: {}, dropdownOpen: false
        };
    }  
    toggle() {
        this.setState(prevState => ({dropdownOpen: !prevState.dropdownOpen
        }));
    }
    render() {
        return (
            <Row>
                <Row className="w-100">
                    <Col xs="12" className="nopcol">
                    <Header section="Invoices"/>

                    </Col>
                </Row>
                <Row className="w-100 p-3">
                <InvoiceTable invoices ={invoices}/>

</Row>
            </Row>
        )
    }
}


export default Invoices

