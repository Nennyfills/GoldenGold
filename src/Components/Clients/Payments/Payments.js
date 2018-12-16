import React, { Component } from 'react'
import { Badge, Row, Col, Dropdown, Input, FormGroup, Button } from 'reactstrap';
import classnames from 'classnames';
import { payments } from '../../../data'
import { clients } from '../../../data'
import { PaymentTable } from '../../../Operations/Payments'
import ClientHeader from '../components/Header'


class ClientInvoice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}, modal: false
        };

   
        this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }

    componentDidMount() {
        console.log(this.state)
        const theuser = clients.find(user => user.id.toString() === this.props.match.params.id)

        this.setState({
            user: theuser
        });
    }

    render() {
        return (
            <Row>
                <Row className="w-100">
                    <Col xs="12" className="nopcol">
                        <div className="PageHeader  bg-white">
                            <div className="PageHeader-head">
                                <h1>Clients / {this.state.user.LastName} {this.state.user.FirstName}</h1>
                                        <i className="fa fa-plus" onClick={this.toggle}></i> Payment
                            </div>
                            <ClientHeader userID={this.state.user.id} active="Payment" />

                        </div>
                    </Col>
                </Row>
                <Row className="w-100 p-3">
                <Col xs="1" className="p-2">
                        <Button outline color="warning" className="btn-sm">Export</Button>{' '}
                    </Col>
               
                    <Col xs="5" className="p-2">
                    <Row className="w-100">
                        <Col md={2}>

<i className="fa fa-calendar float-right mt-2"></i>
</Col>
                            <Col md={5}>
                                <FormGroup>
                                    <Input type="date" className="bg-transparent" name="from" id="exampleEmail" placeholder="From" size="sm" />
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <Input type="date" className="bg-transparent" name="to" id="examplePassword" placeholder="To" size="sm" />
                                </FormGroup>
                            </Col></Row>
                    </Col>
                    <Col xs="4" className="p-2">
                        <Row className="w-100">
                        <Col md={2}>

                            <label className="mt-1 font-weight-bold small">Amount: </label>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <Input type="number" className="bg-transparent" name="from" id="exampleEmail" placeholder="Min " size="sm" />
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <Input type="number" className="bg-transparent" name="to" id="examplePassword" placeholder="Max " size="sm" />
                                </FormGroup>
                            </Col></Row>
                    </Col>
                   
                    <Col xs="2" className="p-2">
                        <Input type="select" name="select" id="exampleSelect" bsSize="sm">
                            <option>Method</option>
                            <option>Cash</option>
                            <option>Check</option>
                            <option>Transfer</option>
                        </Input>
                    </Col>
                    <Col xs="12" className="nopcol">
                        <Col xs="12">
                        <PaymentTable payments ={payments} isOpen={this.state.modal} toggle={this.toggle} />
                        </Col>
                    </Col>
                </Row>
            </Row>)
    }
}

export default ClientInvoice;


