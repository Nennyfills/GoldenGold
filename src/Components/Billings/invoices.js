import React, { Component } from 'react'
import { CardBody, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, CardHeader, CardFooter, Row, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';


class Invoices extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);

        this.state = {
            user: {}, dropdownOpen: false
        };

    }


    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <Row>
                <Row className="w-100">
                    <Col xs="12" className="nopcol">
                        <div className="PageHeader  bg-white">
                            <div className="PageHeader-head">
                                <h1>Billings / Invoices</h1>

                            </div>
                            <div className="pageheader-body pl-4 pt-2">
                                <ul className="mytabnav" style={{ fontWeight: "lighter", fontSize: "smaller" }}>

                                    <li className="mytabnav-active">          <a href={"#/billing/invoices" + this.state.user.id} >Invoices</a>
                                    </li>
                                    <li>          <a href={"#/billing/quotes"}>Quotes</a>
                                    </li>
                                    <li>          <a href={"#/billing/invoices"}>Payments</a>
                                    </li>
                                    <li>          <a href={"#/billing/Refunds"}>Refunds</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="w-100">
</Row>
            </Row>
        )
    }
}


export default Invoices;


