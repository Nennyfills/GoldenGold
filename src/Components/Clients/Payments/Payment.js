import React, {Component} from 'react'
import {Row , Col} from 'reactstrap'
import { clients } from '../../../data'
import { payments } from '../../../data'
import {DisplayPayment} from '../../../Operations/PaymentOperations'
class ClientSinglePayment extends Component{

    constructor(props){
        super(props)
        this.state = {
            user: {},
            payment: {}
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
        
        const thepayment = payments.find(payment => payment.id.toString() === this.props.match.params.id)

        this.setState({
            user: theuser,
            payment: thepayment
        });
    }


    render(){
        return( <Row className="w-100">
            <Row className="w-100">
                <Col xs="12" className="nopcol">
                    <div className="PageHeader  bg-white">
                        <div className="PageHeader-head">
                            <h1> {this.state.user.LastName} {this.state.user.FirstName}/ Payment</h1>
                            <a href={"#/clients/createpayment/" + this.state.user.id }>  <i className="fa fa-plus"></i> Payment </a>
                            <a href={"#/clients/Deletepayment/" + this.state.user.id } className="p-1 text-warning">  <i className="fa fa-times-circle"></i>  </a>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="w-100 p-1">
            <Row className="w-100 bg-white p-2">
            <DisplayPayment payment = {this.state.payment} brief = {this.ClientBrief()} client={this.state.user}/>
            </Row>
            </Row>
        </Row>)
    }
}

export default ClientSinglePayment