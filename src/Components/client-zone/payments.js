import React, { Component } from 'react'
import {Row, Col } from 'reactstrap';

import { PaymentTable } from '../../Operations/Payments'
import { getonebyid, getall } from '../../utilities/apicalls'

class Payments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},  payments: [], filters: {}
        };
    }
    async componentDidMount() {
        var user = await getonebyid("http://localhost:3600/api/clients", this.props.match.params.id)
        var payments = await getall("http://localhost:3600/api/payments?cid="+ user.id)

        this.setState({
            user: user, payments:payments
        });
    }
    render() {
        return (
            <Row>
                <Row className="w-100 mb-3">
                    <Col xs="12" className="nopcol w-100">
                        <div className="PageHeader  bg-white">
                            <div className="PageHeader-head">
                                <h1><a href="/clientzone">  </a>  {this.state.user.FirstName}</h1>

                            </div>
                        </div>
                    </Col>
                </Row>
                <Col xs="12" className="nopcol">
                    <Col xs="12">
                        <PaymentTable payments={this.state.payments} isOpen={this.state.modal} toggle={this.toggle} />
                    </Col>
                </Col>
            </Row>
            )
    }
}

export default Payments