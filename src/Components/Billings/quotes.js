import React, { Component } from 'react'
import { Row, Col,  } from 'reactstrap';
import {QuoteTable} from '../../Operations/Quotes'
import { quotes } from '../../data'

class Quotes extends Component {

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
                                <h1>Billings / Quotess</h1>

                            </div>
                            <div className="pageheader-body pl-4 pt-2">
                                <ul className="mytabnav" style={{ fontWeight: "lighter", fontSize: "smaller" }}>

                                    <li>          <a href={"#/billing/invoices" + this.state.user.id} >Invoices</a>
                                    </li>
                                    <li className="mytabnav-active">          <a href={"#/billing/quotes"}>Quotes</a>
                                    </li>
                                    <li>          <a href={"#/billing/payments"}>Payments</a>
                                    </li>
                                    <li>          <a href={"#/billing/refunds"}>Refunds</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="w-100 p-3">
                <QuoteTable quotes ={quotes}/>
</Row>
            </Row>
        )
    }
}


export default Quotes;


