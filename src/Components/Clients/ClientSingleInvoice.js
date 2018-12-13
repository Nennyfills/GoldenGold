import React, {Component} from 'react'
import {Row , Col} from 'reactstrap'
import { clients } from '../../data'
import { invoices } from '../../data'
import {DisplayInvoice} from '../../Operations/invoiceOperations'
class ClientSingleInvoice extends Component{

    constructor(props){
        super(props)
        this.state = {
            user: {},
            invoice: {}
        };
        this.ClientBrief = this.ClientBrief.bind(this);

    }

    ClientBrief() {
        var user  = this.state.user
          return (
            <div>
              <h6>{user.LastName}</h6> <label>{user.id} {user.type}</label>
              <h6>Address: </h6>
              <label>{user.houseAddress}</label>
              <label>{user.streetAddress}</label>
              <label>{user.city}</label>
              <label>{user.state}</label>
              <label>{user.phone}</label>
              <label>{user.email}</label>
        </div>  )
      }

    componentDidMount() {
        console.log(this.state)
        const theuser = clients.find(user => user.id.toString() === this.props.match.params.uid)
        
        const theinvoice = invoices.find(invoice => invoice.id.toString() === this.props.match.params.id)

        this.setState({
            user: theuser,
            invoice: theinvoice
        });
    }


    render(){
        return( <Row className="w-100">
            <Row className="w-100">
                <Col xs="12" className="nopcol">
                    <div className="PageHeader  bg-white">
                        <div className="PageHeader-head">
                            <h1> {this.state.user.LastName} {this.state.user.FirstName}/ Invoice</h1>
                            <a href={"#/clients/CreateInvoice/" + this.state.user.id }>  <i className="fa fa-plus"></i> Invoice </a>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="w-100 p-3">
            <Row className="w-100 bg-white">
            <DisplayInvoice invoice = {this.state.invoice} brief = {this.ClientBrief()}/>
            </Row>
            </Row>
        </Row>)
    }
}

export default ClientSingleInvoice