import React, { Component } from 'react'
import {Row, Col,  Button, Input, FormGroup, Form } from 'reactstrap';
import { InvoiceTable } from '../../../Operations/Invoices'
import ClientHeader from '../components/Header'
import {searchObjectListbyid , searchObjectListbyvalue} from '../../../Controller/controller'
import { getonebyid, getall } from '../../../utilities/apicalls'



class ClientInvoice extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.mtoggle = this.mtoggle.bind(this);
        this.state = {
            user: {}, dropdownOpen: false , invoices:[]
        };
    }


    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

   async componentDidMount() {

        var user = await getonebyid("http://localhost:3600/api/clients", this.props.match.params.id)
        var invoices = await getall("http://localhost:3600/api/invoices?cid="+ user.id)
         this.setState({
            user:user,
            invoices:invoices,
            
        })

 }

    mtoggle(e) {
        this.filterByStatus(e.target.value)
     }
 
 
     filterByStatus(val){
        //  let filtered = invoices.filter(invoices =>  invoices.Status == val)
        //  this.setState({
        //      invoices: filtered
        //  });
     }

    render() {
        return (
            <Row>
                <Row className="w-100">
                    <Col xs="12" className="nopcol">
                        <div className="PageHeader  bg-white">
                            <div className="PageHeader-head">
                                <h1> <a href={"/admin/Clients" }> Clients </a> /  <a href={"/admin/Clients/" + this.state.user.id}> {this.state.user.lastname} {this.state.user.firstname} </a></h1>
                                <a href={"/admin/clients/CreateInvoice/" + this.state.user.id}>  <i className="fa fa-plus"></i> Invoice </a>
                                <a outline color="warning" className="float-right btn-sm"  href="/clientzone" > View as client
                                </a>
                            </div>
                            <ClientHeader userID={this.state.user.id} active={"Invoice"} />
                        </div>
                    </Col>
                </Row>

                <Row className="w-100 p-3 .d-none .d-md-none .d-lg-none">
                    <Col xs="2" className="p-2">
                        <Button outline color="warning" className="btn-sm">Export</Button>{' '}
                    </Col>
                    <Col xs="3" className="p-2">
                    </Col>
                    <Col xs="4" className="p-2">
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Input type="date" className="bg-transparent" name="from" id="exampleEmail" placeholder="From" size="sm" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Input type="date" className="bg-transparent" name="to" id="examplePassword" placeholder="To" size="sm" />
                                </FormGroup>
                            </Col></Row>
                    </Col>
                    <Col xs="1" className="p-2">
                        <Input type="select" name="select" id="exampleSelect" size="sm">
                            <option disabled>select</option>
                            <option>Due</option>

                        </Input>
                    </Col>
                    <Col xs="2" className="p-2">
                        <Input type="select" name="select" id="exampleSelect" size="sm" onChange={this.mtoggle}>
                            <option>Status</option>
                            <option>Paid</option>
                            <option>Unpaid</option>
                            <option>Partial</option>
                        </Input>
                    </Col>
                    <Col xs="12" className="nopcol">
                        <Col xs="12">
                            <InvoiceTable invoices={this.state.invoices} />
                        </Col>
                    </Col>
                </Row>
            </Row>
        )
    }
}

export default ClientInvoice;
