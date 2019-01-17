import React, {Component} from 'react'
import {Row , Col} from 'reactstrap'
import {DisplayPayment} from '../../../Operations/Payments'
import { getonebyid, getall } from '../../../utilities/apicalls'

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
              <label>{user.address}</label>
              <label>{user.city}</label>
              <label>{user.state}</label>
              <label>{user.phones}</label>
              <label>{user.email}</label>
        </div>  )
      }

    async componentDidMount() {
        var user = await getonebyid("http://localhost:3600/api/clients", this.props.match.params.uid)
        console.log(user)
        var thepayment = await getonebyid("http://localhost:3600/api/payments", this.props.match.params.id)
        

        this.setState({
            user: user,
            payment: thepayment
        });
    }


    render(){
        return( <Row className="w-100">
            <Row className="w-100">
                <Col xs="12" className="nopcol">
                    <div className="PageHeader  bg-white">
                        <div className="PageHeader-head">
                            <h1> {this.state.user.lastname} {this.state.user.firstname}/ Payment</h1>
                            <a href={"/admin/clients/createpayment/" + this.state.user.id }>  <i className="fa fa-plus"></i> Payment </a>
                            <a href={"/admin/clients/Deletepayment/" + this.state.user.id } className="p-1 text-warning">  <i className="fa fa-times-circle"></i>  </a>
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