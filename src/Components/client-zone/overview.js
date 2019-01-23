import React, { Component } from 'react'
import { Card, CardBody,CardHeader, CardFooter, Row, Col,  Table } from 'reactstrap';
import { getonebyid, getall } from '../../utilities/apicalls'


class Overview extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }
    async componentDidMount() {
        sessionStorage.setItem("token", this.props.match.params.id);
        var user = await getonebyid("http://localhost:3600/api/clients", this.props.match.params.id)
        this.setState({
            user: user
        });
    }
  

    render() {
        return (
            <Row>
                <Row className="w-100 mb-3">
                    <Col xs="12" className="nopcol w-100">
                        <div className="PageHeader  bg-white">
                            <div className="PageHeader-head">
                                <h1> {this.state.user.firstname} {this.state.user.lastname}</h1>
 
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="w-100 mb-3">
                    <Col md="12">
                        <Card>
                            <div className="card-header">
                                <div className="red-text">Unpaid invoices <span className="font-weight-bold float-right">see all</span></div>

                            </div>
                            <CardBody>
                                <Table size="sm" borderless stripped className="">
                                    <thead>
                                        <tr className="">
                                            <th className="font-weight-bold">Invoice number</th>
                                            <th className="font-weight-bold">Total</th>
                                            <th className="font-weight-bold">Amount due</th>
                                            <th className="font-weight-bold">Created</th>
                                            <th className="font-weight-bold">Due</th>
                                            <th className="font-weight-bold">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Col>
                    <Row className="mb-3">
                        <Card className="w-100 mb-3">
                            <CardBody>   <table className="table w100m0">
                                <tbody><tr>
                                    <td className="standing" data-tooltip="Client's current account balance. Sum of credit and outstanding">
                                        <span className="display-span">Account balance</span>
                                        <strong><span>&#8358;</span> {this.state.user.balance}</strong>
                                    </td>
                                    <td className="standing" data-tooltip="Available funds. Sum of client's overpayments and payments not linked to any invoice">
                                        <span className="display-span">Credit</span>
                                        <strong><span>&#8358;</span> {this.state.user.credit}</strong>
                                    </td>
                                    <td className="standing" data-tooltip="Total amount owed by client">
                                        <span className="display-span">Outstanding</span>
                                        <strong><span>&#8358;</span> {this.state.user.outstanding}</strong>
                                    </td>
                                </tr>
                                </tbody></table>
                            </CardBody>
                        </Card>

                        <Card sm className="w-100">
                            <CardHeader className="p-2">Client Details</CardHeader>
                            <CardBody className="p-1">
                                <h3>{this.state.user.Name}</h3>
                                <div className="contain">
                                    <table bor className="table table-sm table-borderless">
                                        <tbody> <tr>
                                            <td>ID</td>
                                            <td>{this.state.user.id}</td>
                                        </tr>
                                            <tr><td>Email</td>
                                                <td>{this.state.user.email}</td>
                                            </tr>
                                            <tr><td>Phone</td>
                                                <td>{this.state.user.phones}</td>
                                            </tr></tbody>

                                    </table></div>
                            </CardBody>
                            <CardFooter className="bg-transparent p-1">
                                <a className="btn btn-sm right float-right">Show Details</a>
                            </CardFooter>
                        </Card>
                    </Row>

                </Col>
                <Col>
                        <Card>

                            <CardHeader>
                                <div className="">Services</div>

                                <div className="">
                                    <a className="" href="/client/service/new/256">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                </div>
                            </CardHeader>

                            <CardBody>

                                <div className="p-2" style={{ borderBottom: "1px solid #fafafa" }}>
                                    <strong className="">Basic</strong> – <span className="">1 month</span>
                                    <span className="float-right small"><span>&#8358; </span>29.90</span>
                                    <span className="block small">
                                        service plan: Basic connected to: Lake Gateway - ath0
                                            </span>
                               
                                            

                                </div>
                                <div className="mapouter"><div className="gmap_canvas">
                                <iframe width="300" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=NNPC%20towers&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                                </div></div>
                               


                            </CardBody>
                        </Card>

</Col>
            </Row>

        )
    }
}

export default Overview