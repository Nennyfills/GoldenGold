import React, { Component } from 'react'
import { Badge, Row, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { invoices } from '../../data'
import { clients } from '../../data'
import { CreateInvoice } from '../../Operations/invoiceOperations'
import ClientHeader from './ClientHeader'


class ClientInvoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}, dropdownOpen: false
        };
        this.ClientBrief = this.ClientBrief.bind(this);
    }

    ClientBrief() {
      var user  = this.state.user
        return (
          <div className="small">
            <div className="bold">{user.LastName}</div> <label>{user.id}  ---- {user.type}</label>
            <p>Address: </p>
            <div className="smalller">
            <label>{user.houseAddress}</label> --
            <label>{user.streetAddress}</label> --
            <label>{user.city}</label> --
            <label>{user.state}</label> --
            <label>{user.phone}</label>  -- 
            <label>{user.email}</label></div>
      </div>  )
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
            <Row className="w-100">
                <Row className="w-100">
                    <Col xs="12" className="nopcol">
                        <div className="PageHeader  bg-white">
                            <div className="PageHeader-head">
                                <h3>Clients / {this.state.user.LastName} {this.state.user.FirstName}/ Add Invoice</h3>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="w-100 p-3">
                    <Col xs="12" className="nopcol">
                        <Col xs="12" className="p-3 bg-white" >
                            <CreateInvoice brief = {this.ClientBrief()}  />
                        </Col>
                    </Col>
                </Row>
            </Row>
          )
    }
}

export default ClientInvoice;
