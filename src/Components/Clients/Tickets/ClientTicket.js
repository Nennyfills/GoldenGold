import React, { Component } from 'react';
import { Row, Col, ButtonGroup, Button, Input } from 'reactstrap';
import ClientHeader from '../components/Header'
import { TicketList } from '../../../Operations/Tickets';
import { getonebyid, getall } from '../../../utilities/apicalls'

class ClientTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}, tickets:[]
        };
    }

   async componentDidMount() {
        console.log(this.state)
        var user = await getonebyid("http://localhost:3600/api/clients", this.props.match.params.id)

        this.setState({
            user: user
        });
    }

    render() {
        return (
            <Row>
                <Row className="w-100">
                    <Col xs="12" className="nopcol">
                        <div className="PageHeader  bg-white">
                            <div className="PageHeader-head">
                            <h1> <a href={"/#Clients" }> Clients </a> /  <a href={"/#Clients/" + this.state.user.id}> {this.state.user.lastname} {this.state.user.firstname} </a></h1>
  <ButtonGroup className="float-right">
        <Button className="btn-outline-success btn-sm">Left</Button>
        <Button className="btn-outline-warning btn-sm">Middle</Button>
        <Button className="btn-outline-primary btn-sm">Right</Button>
      </ButtonGroup>
                             
                            </div>
                            <ClientHeader userID={this.state.user.id} active={"Ticket"} />

                        </div>
                    </Col>
                </Row>


                <Row className="w-100">
                        <Col xs="5" id="t-1" className="p-1">
                            
<TicketList tickets={this.state.tickets}/>
                       
                        </Col>
                        
                        <Col xs="7" className="p-2">
                            <Row className="w-100 card-header bg-white">
                                <div className="t-d-h"></div>
                            </Row>
                            <Row className="w-100 card-body p-3">
                            
                            <div className="p-3 bg-white w-100">
                            <p></p>
                            
                            </div>
 </Row>
 <Row className="w-100 card-header bg-white">
 <Input type="textarea" name="text" id="exampleText" />
 <div className="p-2">
 <Button className="btn btn-dark float-right">Reply</Button></div>

                            </Row>
                        </Col>
                </Row>
            </Row>
        )
    }
}

export default ClientTicket