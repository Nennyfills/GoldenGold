import React, { Component } from 'react'
import { CardBody, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, CardHeader, CardFooter, Row, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Table } from 'reactstrap';
import { clients } from '../../data'


class Overview extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
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
                <Row className="w-100 mb-3">
                    <Col md="12">
                        <Card>
                            <div class="card-header">
                                <div class="card-header__title">Unpaid invoices</div>

                                <div class="card-header__actions">
                                    <a class="action" href="/client-zone/invoices">See all</a>
                                </div>
                            </div>
                            <CardBody>
                                <Table className="table-striped table-sm">
                                    <thead>
                                        <tr>
                                            <th>Invoice number</th>
                                            <th class="alignRight">Total</th>
                                            <th class="alignRight visible--mdUp">Amount due</th>
                                            <th class="visible--mdUp">Created</th>
                                            <th>Due</th>
                                            <th class="alignRight visible--mdUp">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr data-href="/client-zone/invoices/1257">
                                            <td>18001072 <span class="invoice-status-badge ml-10 appType--micro success">Partial</span></td>
                                            <td class="grouped-column alignRight">$79.90</td>
                                            <td class="alignRight visible--mdUp">$60.00</td>
                                            <td class="grouped-column visible--mdUp">
                                                1 Jan 2019
                            </td>
                                            <td class="grouped-column">
                                                <span data-tooltip="15 Jan 2019">due in 13 days</span>
                                            </td>
                                            <td class="alignRight visible--mdUp actions">
                                            </td>
                                        </tr>
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
                                        <strong><span>&#8358;</span>{this.state.user.balance}</strong>
                                    </td>
                                    <td className="standing" data-tooltip="Available funds. Sum of client's overpayments and payments not linked to any invoice">
                                        <span className="display-span">Credit</span>
                                        <strong><span>&#8358;</span>{this.state.user.credit}</strong>
                                    </td>
                                    <td className="standing" data-tooltip="Total amount owed by client">
                                        <span className="display-span">Outstanding</span>
                                        <strong><span>&#8358;</span>{this.state.user.outstanding}</strong>
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
                                                <td>{this.state.user.phone}</td>
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
                                <div class="card-header__title">Services</div>

                                <div class="card-header__actions">
                                    <a class="action action--icon-only" href="/client/service/new/256">
                                        <i class="fa fa-plus"></i>
                                    </a>
                                </div>
                            </CardHeader>

                            <CardBody>

                                <div className="p-2" style={{ borderBottom: "1px solid #fafafa" }}>
                                    <strong class="">Basic</strong> – <span class="">1 month</span>
                                    <span className="float-right small"><span>&#8358; </span>29.90</span>
                                    <span class="block small">
                                        service plan: Basic connected to: Lake Gateway - ath0
                                            </span>
                               
                                            

                                </div>
                                <div class="mapouter"><div class="gmap_canvas">
                                <iframe width="300" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=NNPC%20towers&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                                </div></div>
                               


                            </CardBody>
                        </Card>

</Col>
            </Row>

        )
    }
}

export default Overview