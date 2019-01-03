import React, { Component } from 'react'
import { CardBody, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, CardHeader, CardFooter, Row, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { clients } from '../../data'
import ClientHeader from './components/Header'




class Client extends Component {



    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);

        this.state = {
            user: {}, dropdownOpen: false
        };

    }


    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
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
                                <h1><a href="/#Clients"> Clients </a> / {this.state.user.FirstName}</h1>
                                <Dropdown className="plusdrop" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                    <DropdownToggle caret>
                                        <i className="fa fa-plus fa-1x"></i>
                                    </DropdownToggle>
                                    <DropdownMenu className="bg-white">
                                        <DropdownItem className="bg-white"> <a href={"#/clients/CreateInvoice/" + this.state.user.id}> Invoice</a></DropdownItem>
                                        <DropdownItem className="bg-white"> <a>Service</a></DropdownItem>
                                        <DropdownItem className="bg-white"> <a>Payment</a></DropdownItem>
                                        <DropdownItem className="bg-white"> <a>Documents</a></DropdownItem>
                                        <DropdownItem className="bg-white"> <a>Ticket</a></DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>  <Button outline color="warning" className="float-right btn-sm"> View as client
                                </Button>
                            </div>
                            <ClientHeader userID={this.state.user.id} active={"Overview"} />
                        </div>
                    </Col>
                </Row>
                <Row className="w-100 p-3">
                    <Col xs="6">
                        <Row className="bg-white mb-3">
                            <Card className="w-100">
                                <CardBody>   <table className="w100m0">
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
                        </Row>
                        <Row className="mb-3">
                            <div className="card w-100">
                                <div class="card-body">
                                    <table class="account-standings account-standings-info">
                                        <tbody><tr className="balance">
                                            <td class="pok" data-tooltip="Total amount for the client's services averaged to one month.">
                                                <i class="fa fa-credit-card p-2"></i>
                                                <span>
                                                    Budget:
                            <strong><span>&#8358; </span>29.90 / month</strong>
                                                </span>
                                            </td>
                                            <td className="poi" data-tooltip="Date when the next recurring invoice will be generated">
                                                Next invoicing day:
                        <strong>
                                                    1 Dec 2018
                                                    </strong>
                                            </td>
                                        </tr>
                                        </tbody></table>
                                </div>
                            </div>
                        </Row>


                        <div class="card">

                            <div class="card-header">
                                <div class="card-header__title">Services</div>

                                <div class="card-header__actions">
                                    <a class="action action--icon-only" href="/client/service/new/256">
                                        <i class="fa fa-plus"></i>
                                    </a>
                                </div>
                            </div>

                            <div class="card-body">

                                <div className="p-2" style={{ borderBottom: "1px solid #fafafa" }}>
                                    <strong class="">Basic</strong> – <span class="">1 month</span>
                                    <span className="float-right small"><span>&#8358; </span>29.90</span>
                                    <span class="block small">
                                        service plan: Basic connected to: Lake Gateway - ath0
                                            </span>
                                </div>


                            </div>
                        </div>


                    </Col>
                    <Col xs="6">
                        <Card sm className="mb-3">
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
                        <Card>
                            <div class="card-header p-2">
                                <div class="card-header__title float-left">INVOICES</div>

                                <div class="card-header__actions">
                                    <a class="action float-right" href="/client/256/invoices">See all</a>
                                </div>
                            </div>
                            <CardBody>
                                <table style={{ borderCollapse: "separate" }} class=" table table-borderless table-sm w100m0">
                                    <thead>
                                        <tr className="lighter">
                                            <th>Invoice number</th>
                                            <th class="alignRight">Total</th>
                                            <th class="alignRight">Amount due</th>
                                            <th>Due</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr data-href="/client/invoice/1352">
                                            <td>18001167 <span class="paidSpan">Paid</span></td>
                                            <td class="grouped-column alignRight"><span>&#8358; </span>29.90</td>
                                            <td class="alignRight"><span>&#8358; </span>0.00</td>
                                            <td>
                                                <span>15 Nov 2018</span>
                                            </td>
                                        </tr>
                                        <tr data-href="/client/invoice/1193">
                                            <td>18001008 <span class="paidSpan">Paid</span></td>
                                            <td class="grouped-column alignRight"><span>&#8358; </span>29.90</td>
                                            <td class="alignRight"><span>&#8358; </span>0.00</td>
                                            <td>
                                                <span>15 Oct 2018</span>
                                            </td>
                                        </tr>
                                        <tr data-href="/client/invoice/1028">
                                            <td>18000843 <span class="paidSpan">Paid</span></td>
                                            <td class="grouped-column alignRight"><span>&#8358; </span>29.90</td>
                                            <td class="alignRight"><span>&#8358; </span>0.00</td>
                                            <td>
                                                <span>15 Sep 2018</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Row>)
    }
}

export default Client;


