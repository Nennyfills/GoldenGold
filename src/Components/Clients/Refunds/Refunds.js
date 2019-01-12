import React, { Component } from 'react'
import { Badge, Row, Col,  } from 'reactstrap';
import { getonebyid, getall, postRequest } from '../../../utilities/apicalls'


import {RefundTable} from '../../../Operations/Refunds'
import ClientHeader from '../components/Header'



class ClientInvoice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}, modal: false, refunds:[]
        };   
        this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }

    async componentDidMount() {
        console.log(this.state)
        var user = await getonebyid("http://localhost:3600/api/clients", this.props.match.params.id)
        var refunds = await getall("http://localhost:3600/api/refunds?cid="+ user.id)


        this.setState({
            user: user,
            refunds:refunds
        });
    }

    render() {
        return (
            <Row>
                <Row className="w-100">
                    <Col xs="12" className="nopcol">
                        <div className="PageHeader  bg-white">
                            <div className="PageHeader-head">
                            <h1> <a href={"/admin/Clients" }> Clients </a> /  <a href={"/admin/Clients/" + this.state.user.id}> {this.state.user.lastname} {this.state.user.firstname} </a></h1>
                                                        
                                       
                                        <a outline color="warning" className="float-right btn-sm"  href="/clientzone" > View as client
                                </a>
                            </div>
                            <ClientHeader userID={this.state.user.id} active={"Refund"} />

                        </div>
                    </Col>
                </Row>
                <Row className="w-100 p-3">
                    <Col xs="12" className="nopcol">
                        <Col xs="12">
                        <RefundTable refunds ={this.state.refunds} isOpen={this.state.modal} toggle={this.toggle} />
                        </Col>
                    </Col>
                </Row>
            </Row>)
    }
}

export default ClientInvoice;


