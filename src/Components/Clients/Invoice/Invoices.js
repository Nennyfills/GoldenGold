import React, { Component } from 'react'
import { Badge, Row, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { invoices } from '../../../data'
import { clients } from '../../../data'
import { InvoiceTable } from '../../../Operations/invoiceOperations'
import ClientHeader from '../ClientHeader'



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
                                <a href={"#/clients/CreateInvoice/" + this.state.user.id }>  <i className="fa fa-plus"></i> Invoice </a>

                            </div>
                            <ClientHeader userID={this.state.user.id} />
                        </div>
                    </Col>
                </Row>

                <Row className="w-100 p-3">
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
