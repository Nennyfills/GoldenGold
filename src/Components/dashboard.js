import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader, CardFooter, Progress, Alert, UncontrolledAlert, Table } from 'reactstrap';
import { getall } from '../utilities/apicalls'
class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clients: []
        }
        this.ActiveClientCount = this.ActiveClientCount.bind(this);
        this.InActiveClientCount = this.InActiveClientCount.bind(this);
    }
    componentWillMount() {
        getall("http://localhost:3600/api/clients").then((data) => {
            this.setState({
                clients: data
            });
        })
    }
    componentDidMount() {

    }

    ActiveClientCount() {
        return this.state.clients.filter(user => user.status.toString().toLowerCase() == "active").length
    }
    InActiveClientCount() {
        return this.state.clients.filter(user => user.status.toString().toLowerCase() != "active").length
    }

    render() {
        return (
            <Row className="pt-3">
                <Col xs="12" md="6" >
                    <Card className="mb-4">
                        <CardHeader className="bg-white"><p className="font-weight-bolder mb-0">OVERVIEW <span className="float-right"> <a href="/admin/clients"> see all</a></span></p>  </CardHeader>
                        <Row>
                            <Col xs="4" className="over-item p-3">
                                <i className="fa fa-2x fa-users" />
                                <div className="pl-3">
                                    <h2 className="over-item-no  mb-0">{this.state.clients.length}</h2>
                                    <span>clients</span>
                                </div>
                            </Col>

                            <Col xs="4" className="over-item p-3">
                                <i className="fa fa-2x fa-users" />
                                <div className="pl-3">
                                    <h2 className="over-item-no  mb-0">{this.ActiveClientCount()}</h2>
                                    <span>active </span>
                                </div>
                            </Col>

                            <Col xs="4" className="over-item p-3">
                                <i className="fa fa-2x fa-users" />
                                <div className="pl-3">
                                    <h2 className="over-item-no  mb-0">{this.InActiveClientCount()}</h2>
                                    <span>suspended</span>
                                </div>
                            </Col>

                        </Row>
                    </Card>

                    <Card className="mb-4">
                        <Row>
                            <Col className="p-3">
                                <CardHeader className="bg-white"><p className="font-weight-bolder mb-0">OUTAGES</p></CardHeader>

                                <Row className="p-3">
                                    <Col> <h2 className="over-item-no  mb-0">0</h2>
                                        <span className="small">devices</span> </Col>
                                    <Col> <h2 className="over-item-no  mb-0">1</h2>
                                        <span className="small">service device</span> </Col>
                                </Row>
                            </Col>

                            <Col className="p-3">
                                <CardHeader className="bg-white"><p className="font-weight-bolder mb-0">UNKNOWN DEVICES</p></CardHeader>
                                <Row className="p-3">
                                    <Col> <h2 className="over-item-no  mb-0">0</h2>
                                        <span>devices</span> </Col>
                                    <Col> <h2 className="over-item-no  mb-0">1</h2>
                                        <span>service device</span> </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                    <Card className="mb-4 p-2">
                        <CardHeader className="bg-white"><p className="font-weight-bolder mb-0">NETWORK USAGE</p></CardHeader>
                        <Row>
                            <Col xs="0" md="5" className="align-items-center"> <div className="p-3"> <h2 className="over-item-no  mb-0"> <i className="fa fa-arrow-down small" /> 147<span className="small">TB</span> </h2>
                                <span>downloads</span> </div>
                                <div className="p-3"> <h2 className="over-item-no  mb-0"> <i className="fa fa-arrow-up small" />72.03<span className="small">TB</span></h2>
                                    <span>uploads</span> </div></Col>
                            <Col xs="12" md="7"></Col>
                        </Row>
                    </Card>
                    <Card className="mb-4">
                        <CardHeader className="bg-white"><p className="font-weight-bolder mb-0">TOP USERS</p></CardHeader>

                    </Card>
                </Col>


                <Col><Card className="mb-4">
                    <CardHeader className="bg-white"><p className="font-weight-bolder mb-0">SYSTEM MAILER</p></CardHeader>
                    <Row>
                        <Col>  </Col>
                    </Row>
                </Card>


                    <Card className="mb-4">
                        <CardHeader className="bg-white"><p className="font-weight-bolder mb-0">DUE INVOICES <span className="float-right"> <a href="/admin/billing/invoices">see all</a> </span></p></CardHeader>
                        <Row className="p-3">
                            <Table size="sm" borderless striped hover>
                                <thead>
                                    <tr className="font-weight-bold">
                                        <th>Invoice number</th>
                                        <th class="visible--xlgUp">Client</th>
                                        <th class="alignRight">
                                            <span class="visible--xlgUp">Total / </span>
                                            Amount due                        </th>
                                        <th>Due</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    
                                </tbody>
                            </Table>
                        </Row>
                    </Card>

                    <Card className="mb-4">
                        <CardHeader className="bg-white"><p className="font-weight-bolder mb-0">UNATTACHED PAYMENTS</p></CardHeader>
                        <Row>
                            <Col> <p>There are no unattached payments.</p></Col>
                        </Row>
                    </Card>

                    <Card className="mb-4">
                        <CardHeader className="bg-white"><p className="font-weight-bolder mb-0">JOB QUEUE <span className="float-right">see all</span></p></CardHeader>
                        <Row className="p-3">
                            <UncontrolledAlert color="info" className="w-100">
                                Sample job on queue
    </UncontrolledAlert>
                            <UncontrolledAlert color="info" className="w-100">
                                Sample job on queue
    </UncontrolledAlert>
                            <UncontrolledAlert color="info" className="w-100">
                                Sample job on queue
    </UncontrolledAlert>
                        </Row>
                    </Card>

                    <Card className="mb-4">
                        <CardHeader className="bg-white"><p className="font-weight-bolder mb-0">TICKETS <span className="float-right">see all</span></p></CardHeader>
                        <Row className="p-2">
                            <Col><Alert color="success">
                                <h6 className="alert-heading">Well done! <span className="float-right">4/11/19 - Goke Femi</span> </h6>
                                <p className="mb-0">
                                    Aww yeah, you successfully read this important alert message...
        </p>

                            </Alert>  </Col>
                        </Row>
                    </Card></Col>
            </Row>

        );
    }
}

export default Dashboard;
