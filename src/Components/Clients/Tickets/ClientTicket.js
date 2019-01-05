import React, { Component } from 'react';
import { Badge, Row, Col, ButtonGroup, Button, Input, CardHeader, Card, CardBody, CardFooter } from 'reactstrap';
import { clients , tickets } from '../../../db'
import ClientHeader from '../components/Header'
import { TicketList } from '../../../Operations/Tickets';
class ClientTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}, dropdownOpen: false
        };
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
                            <h1> <a href={"/#Clients" }> Clients </a> /  <a href={"/#Clients/" + this.state.user.id}> {this.state.user.LastName} {this.state.user.FirstName} </a></h1>
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
                            
<TicketList tickets={tickets}/>
                       
                        </Col>
                        
                        <Col xs="7" className="p-2">
                            <Row className="w-100 card-header bg-white">
                                <div className="t-d-h">Out of Service for 20Hours</div>
                            </Row>
                            <Row className="w-100 card-body p-3">
                            
                            <div className="p-3 bg-white">
                            <p>Out of Service for 20Hours 01/11/2018</p>
                            Ipsam ratione omnis perspiciatis excepturi perferendis numquam iste dolor. Vel laborum molestias culpa perferendis et dolores temporibus. Et magnam in praesentium aspernatur.
    
    Doloremque culpa voluptas ut harum dolorem rerum. Quibusdam minima unde mollitia porro. In impedit cumque nemo ducimus.
    
    Incidunt eveniet eos commodi omnis quos. Et maxime nihil molestias facere non. A sed ducimus iste commodi ipsa sapiente quia.
    
Minima sed explicabo a alias facere. Ipsa minima velit minima dolorum sapiente debitis qui voluptates.
 Dolorum iure eos sunt necessitatibus exercitationem voluptates molestiae. Autem officiis ut consequatur ratione aut facilis illo maiores.</div>
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