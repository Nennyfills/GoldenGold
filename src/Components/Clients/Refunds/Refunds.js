import React, { Component } from 'react'
import { Badge, Row, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import classnames from 'classnames';
import { refunds } from '../../../data'
import { clients } from '../../../data'
import {RefundTable} from '../../../Operations/Refunds'
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
                                                        
                                        <i className="fa fa-plus" onClick={this.toggle}></i>
                                 
                            </div>
                            <ClientHeader userID={this.state.user.id} active={"Refund"} />

                        </div>
                    </Col>
                </Row>
                <Row className="w-100 p-3">
                    <Col xs="12" className="nopcol">
                        <Col xs="12">
                        <RefundTable refunds ={refunds} isOpen={this.state.modal} toggle={this.toggle} />
                        </Col>
                    </Col>
                </Row>
            </Row>)
    }
}

export default ClientInvoice;


