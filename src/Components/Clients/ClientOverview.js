import React, { Component } from 'react'
import { CardBody,  Card,  UncontrolledTooltip, CardHeader, CardFooter, Row, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { clients } from '../../db'
import ClientHeader from './components/Header'
import {updateRequest} from '../../utilities/apicalls'
import {valid} from '../../utilities/validate'
import { getonebyid } from '../../utilities/apicalls'



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
        getonebyid("http://localhost:3600/api/clients", this.props.match.params.id).then((data) => {this.setState({
            user: data
        });})

        
    }

    render() {
        return (
            <Row>
                <Row className="w-100">
                    <Col xs="12" className="nopcol">
                        <div className="PageHeader  bg-white">
                            <div className="PageHeader-head">
                                <h1><a href="/admin/Clients"> Clients </a> / {this.state.user.firstname}</h1>
                                <Dropdown className="plusdrop" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                    <DropdownToggle caret>
                                        <i className="fa fa-plus fa-1x"></i>
                                    </DropdownToggle>
                                    <DropdownMenu className="bg-white">
                                        <DropdownItem className="bg-white"> <a href={"/clients/CreateInvoice/" + this.state.user.id}> Invoice</a></DropdownItem>
                                        <DropdownItem className="bg-white"> <a>Service</a></DropdownItem>
                                        <DropdownItem className="bg-white"> <a>Payment</a></DropdownItem>
                                        <DropdownItem className="bg-white"> <a>Documents</a></DropdownItem>
                                        <DropdownItem className="bg-white"> <a>Ticket</a></DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>  <a outline color="warning" className="float-right btn-sm"  href="/clientzone" > View as client
                                </a>
                            </div>
                            <ClientHeader userID={this.state.user.id} active={"Overview"} />
                        </div>
                    </Col>
                </Row>
                <Row className="w-100 p-3">
                    <Col md="6">
                        <Row className="bg-white mb-3">
                            <Card className="w-100">
                                <CardBody>   <table className="w100m0">
                                    <tbody><tr>
                                        <td className="standing">
                                            <span className="display-span" id="actbal">Account balance</span>
                                            <strong><span>&#8358;</span>{this.state.user.balance}</strong>
                                            <UncontrolledTooltip placement="right" target="actbal">
        Current balance of the client
      </UncontrolledTooltip>
                                        </td>
                                        <td className="standing">
                                            <span className="display-span">Credit</span>
                                            <strong><span>&#8358;</span>{this.state.user.credit}</strong>
                                        </td>
                                        <td className="standing">
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
                                            <td class="pok small" data-tooltip="">
                                                <i class="fa fa-credit-card p-2"></i>
                                                <span>
                                                    Budget: </span> <br/>
                            <strong><span>&#8358; </span> 0.0 / month </strong>
                                               
                                            </td>
                                            <td className="poi small" data-tooltip="Date when the next recurring invoice will be generated">
                                                Next invoicing day:
                        <strong>
                                                    ---
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
                                                <td>{this.state.user.phones}</td>
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
                        </Card>
                    </Col>
                </Row>
            </Row>)
    }
}

export default Client;


