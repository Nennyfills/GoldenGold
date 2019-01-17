import React, { Component } from 'react'
import {  Row, Col } from 'reactstrap';
import Header from './Components/Header'
import {PaymentTable} from '../../Operations/Payments'
import { getonebyid, getall } from '../../utilities/apicalls'

class Payments extends Component {

    constructor(props) {
        super(props);

        this.state = {
            payments: []
        };

    }
    async componentDidMount() {
        var payments = await getall("http://localhost:3600/api/payments")

        this.setState({
            payments: payments
        });
    }


    render() {
        return (
            <Row>
                <Row className="w-100">
                    <Col xs="12" className="nopcol">
                       <Header section="Payments"/>
                    </Col>
                </Row>
                <Row className="w-100 p-3">
                <PaymentTable payments ={this.state.payments} isOpen={this.state.modal} toggle={this.toggle} save={(payment)=>this.savepayment(payment)} invoices={this.state.unpaid}/>
                </Row>
            </Row>
        )
    }
}


export default Payments;


