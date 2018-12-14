import React, { Component } from 'react'
import { Badge, Row, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import classnames from 'classnames';
import { payments } from '../../../data'
import { clients } from '../../../data'
import { PaymentTable } from '../../../Operations/Payments'



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
                                     <a className=""> <i class="fa fa-power-off  decbtn"></i>
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
                        <Col xs="12">
                        <PaymentTable payments ={payments} isOpen={this.state.modal} toggle={this.toggle} />
                        </Col>
                    </Col>
                </Row>
            </Row>)
    }
}

export default ClientInvoice;


