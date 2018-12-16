import React, { Component } from 'react'
import { Badge, Row, Col, Dropdown, DropdownItem, Button, Input, FormGroup, Form } from 'reactstrap';
import { invoices } from '../../../data'
import { clients } from '../../../data'
import { InvoiceTable } from '../../../Operations/Invoices'
import ClientHeader from '../components/Header'



class ClientInvoice extends Component {
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
                                <h1>Clients / {this.state.user.LastName} {this.state.user.FirstName}/ Add Invoice</h1>
                                <a href={"#/clients/CreateInvoice/" + this.state.user.id}>  <i className="fa fa-plus"></i> Invoice </a>

                            </div>
                            <ClientHeader userID={this.state.user.id} active={"Invoice"} />
                        </div>
                    </Col>
                </Row>

                <Row className="w-100 p-3">
                    <Col xs="2" className="p-2">
                        <Button outline color="warning" className="btn-sm">Export</Button>{' '}
                    </Col>
                    <Col xs="3" className="p-2">
                    </Col>
                    <Col xs="4" className="p-2">
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Input type="date" className="bg-transparent" name="from" id="exampleEmail" placeholder="From" size="sm" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Input type="date" className="bg-transparent" name="to" id="examplePassword" placeholder="To" size="sm" />
                                </FormGroup>
                            </Col></Row>
                    </Col>
                    <Col xs="1" className="p-2">
                        <Input type="select" name="select" id="exampleSelect" bsSize="sm">
                            <option disabled>select</option>
                            <option>Due</option>

                        </Input>
                    </Col>
                    <Col xs="2" className="p-2">
                        <Input type="select" name="select" id="exampleSelect" bsSize="sm">
                            <option>Status</option>
                            <option>Paid</option>
                            <option>Unpaid</option>
                            <option>Partial</option>
                        </Input>
                    </Col>
                    <Col xs="12" className="nopcol">
                        <Col xs="12">
                            <InvoiceTable invoices={invoices} />
                        </Col>
                    </Col>
                </Row>
            </Row>
        )
    }
}

export default ClientInvoice;
