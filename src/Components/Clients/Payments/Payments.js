import React, { Component } from 'react'
import { Badge, Row, Col, Dropdown, Input, FormGroup, Button } from 'reactstrap';
import classnames from 'classnames';
import { payments } from '../../../data'
import { clients } from '../../../data'
import { PaymentTable } from '../../../Operations/Payments'
import ClientHeader from '../components/Header'


class ClientInvoice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}, modal: false , payments :payments ,filters :{}
        };


        this.toggle = this.toggle.bind(this);
        this.mtoggle = this.mtoggle.bind(this); 
        this.amtFilter = this.amtFilter.bind(this);
        this.textflt = this.textflt.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    componentDidMount() {
        const theuser = clients.find(user => user.id.toString() === this.props.match.params.id)

        this.setState({
            user: theuser,
            payments :payments
        });
    }

    mtoggle(e) {
       this.filterByMethod(e.target.value)
    }


    filterByMethod(val){
        let filtered = payments.filter(payments =>  payments.Method == val)
        this.setState({
            payments: filtered
        });
    }

    textflt(e){
        var filters =Object.assign({}, this.state.filters);
        filters[e.target.name] = e.target.value
        this.setState({
            filters : filters
        })
    }

    amtFilter(){
        let obj = this.state.filters;
        var a  = obj["amtmin"] ? obj["amtmin"] :0
        var b  = obj["amtmax"] ? obj["amtmax"] :999999999999999
        let filtered = payments.filter(function(value){
            return value.Amount >= a && value.Amount <=b
        } )
        this.setState({
            payments: filtered
        });
    }

  
    render() {
        return (
            <Row>
                <Row className="w-100">
                    <Col xs="12" className="nopcol">
                        <div className="PageHeader  bg-white">
                            <div className="PageHeader-head">
                                <h1> <a href={"/#Clients"}> Clients </a> /  <a href={"/#Clients/" + this.state.user.id}> {this.state.user.LastName} {this.state.user.FirstName} </a></h1>
                                <i className="fa fa-plus" onClick={this.toggle}></i> Payment
                            </div>
                            <ClientHeader userID={this.state.user.id} active="Payment" />

                        </div>
                    </Col>
                </Row>
                <Row className="w-100 p-3">
                    <Col xs="1" className="p-2">
                        <Button outline color="warning" className="btn-sm">Export</Button>{' '}
                    </Col>

                    <Col xs="5" className="p-2">
                        <Row className="w-100">
                            <Col md={1} className="p-0">
                                <i className="fa fa-calendar float-right mt-2"></i>
                            </Col>
                            <Col md={5} className="pr-0">
                                <FormGroup>
                                    <Input type="date" className="bg-transparent" name="from" id="exampleEmail" placeholder="From" size="sm" />
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <Input type="date" className="bg-transparent" name="to" id="examplePassword" placeholder="To" size="sm" />
                                </FormGroup>
                            </Col>
                            <Col md={1} className="p-0">
                                <i className="fa fa-check float-left mt-2"></i>
                            </Col></Row>
                    </Col>
                    <Col xs="4" className="p-2">
                        <Row className="w-100">
                            <Col md={2}>

                                <label className="mt-1 font-weight-bold small">Amount: </label>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Input type="number" className="bg-transparent" name="amtmin" onChange={this.textflt} id="exampleEmail" placeholder="Min " size="sm" />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Input type="number" className="bg-transparent" name="amtmax" onChange={this.textflt} id="examplePassword" placeholder="Max " size="sm" />
                                </FormGroup>
                            </Col><Col md={1} className="p-0">
                                <i className="fa fa-check float-left mt-2" onClick={this.amtFilter}></i>
                            </Col></Row>
                    </Col>

                    <Col xs="2" className="p-2">
                        <Input type="select" name="select" id="exampleSelect" bsSize="sm" onChange={this.mtoggle}>
                            <option>Method</option>
                            <option>Cash</option>
                            <option>Check</option>
                            <option>Transfer</option>
                        </Input>
                    </Col>
                    <Col xs="12" className="nopcol">
                        <Col xs="12">
                            <PaymentTable payments={this.state.payments} isOpen={this.state.modal} toggle={this.toggle} />
                        </Col>
                    </Col>
                </Row>
            </Row>)
    }
}

export default ClientInvoice;


