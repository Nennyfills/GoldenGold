import React, { Component } from 'react'
import { Badge, Row, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import classnames from 'classnames';
import { payments } from '../../data'
import { clients } from '../../data'




function ClientPaymentRow(props) {
    const payment = props.payment


    return (
        <tr key={payment.id.toString()}>
            <td>{payment.Method}</td>
            <td>{payment.Amount}</td>
            <td>{payment.Createddate}</td>
        </tr>
    )
}


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
                                <h1>Clients / {this.state.user.LastName} {this.state.user.FirstName}</h1>
                                <Dropdown className="plusdrop" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                    <DropdownToggle caret>
                                        <i className="fa fa-plus"></i> Payment
                                    </DropdownToggle>
                                    <DropdownMenu className="bg-white">
                                        <DropdownItem className="bg-white">Another Payment</DropdownItem>
                                        <DropdownItem className="bg-white">Another Ticket</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown> <a className=""> <i class="fa fa-power-off  decbtn"></i>
                                </a>
                            </div>
                            <div className="pageheader-body pl-4 pt-2">
                                <ul className="mytabnav" style={{ fontWeight: "lighter", fontSize: "smaller" }}>

                                       <li className="">          <a  href={"#/clients/"+ this.state.user.id} >Overview</a>
                                    </li>
                                    <li className="mytabnav-active">          <a href={"#/clients/payments/list/"+ this.state.user.id}>Payments</a>
                                    </li>
                                    <li>          <a href={"#/clients/invoices/list/"+ this.state.user.id}>Invoices</a>
                                    </li>
                                    <li>          <a href={"#/clients/Refunds/list/" + this.state.user.id}>Refunds</a>
                                    </li>
                                    <li>          <a href={"#/clients/Documents/list/" + this.state.user.id}>Documents</a>
                                    </li>
                                    <li>          <a href={"#/clients/tickets/list/"+ this.state.user.id}>Tickets</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="w-100 p-3">
                    <Col xs="12" className="nopcol">
                        <Col xs="12"><table class=" bg-white table table-hover table-sm table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">METHOD</th>
                                    <th scope="col">AMOUNT</th>
                                    <th scope="col">CREATED DATE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {payments.map((payment, index) =>
                                    <ClientPaymentRow key={index} payment={payment} />
                                )}
                            </tbody>
                        </table></Col>
                    </Col>
                </Row>
            </Row>)
    }
}

export default ClientInvoice;


