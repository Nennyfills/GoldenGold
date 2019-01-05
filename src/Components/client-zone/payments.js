import React, { Component } from 'react'
import { CardBody, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, CardHeader, CardFooter, Row, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Table } from 'reactstrap';
import { payments } from '../../db'
import { clients } from '../../db'
import { PaymentTable } from '../../Operations/Payments'

class Payments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},  payments: payments, filters: {}
        };
    }
    componentDidMount() {
        let theuser = clients.find(user => user.id.toString() === this.props.match.params.id)
       
        if(theuser == null){
            theuser = clients[2]
        }

        this.setState({
            user: theuser
        });
    }
    render() {
        return (
            <Row>
                <Row className="w-100 mb-3">
                    <Col xs="12" className="nopcol w-100">
                        <div className="PageHeader  bg-white">
                            <div className="PageHeader-head">
                                <h1><a href="/#clientzone">  </a>  {this.state.user.FirstName}</h1>

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