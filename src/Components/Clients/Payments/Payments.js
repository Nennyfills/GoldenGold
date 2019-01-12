import React, { Component } from 'react'
import {  Row, Col, Input, FormGroup, Button } from 'reactstrap';
import { PaymentTable } from '../../../Operations/Payments'
import ClientHeader from '../components/Header'
import { getonebyid, getall, postRequest , updateRequest} from '../../../utilities/apicalls'


class ClientInvoice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}, modal: false , payments :[] ,filters :{}, unpaid:[]
        };


        this.toggle = this.toggle.bind(this);
        this.mtoggle = this.mtoggle.bind(this); 
        this.amtFilter = this.amtFilter.bind(this);
        this.textflt = this.textflt.bind(this);
        this.savepayment = this.savepayment.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    async componentDidMount() {
        var user = await getonebyid("http://localhost:3600/api/clients", this.props.match.params.id)
        var payments = await getall("http://localhost:3600/api/payments?cid="+ user.id)

        var invoices = await getall("http://localhost:3600/api/invoices?cid="+ user.id)

        var unpaid =  invoices.filter((invoice)=> invoice.status != "paid")
        console.log(unpaid)
         this.setState({
            user:user,
            payments:payments,
            unpaid:unpaid
        })
      
    }

    mtoggle(e) {
       this.filterByMethod(e.target.value)
    }


    filterByMethod(val){
        let filtered = this.state.payments.filter(payments =>  payments.Method == val)
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
        let filtered = this.state.payments.filter(function(value){
            return value.Amount >= a && value.Amount <=b
        } )
        this.setState({
            payments: filtered
        });
    }

    async savepayment(payment){
        payment["cid"] = this.state.user.id
        payment["datetime"] = new Date()
        payment["reciept"] = false
       var parments= await postRequest('http://localhost:3600/api/payments', JSON.stringify(payment))
       if(payment.invoiceid){
        var inv = await getonebyid("http://localhost:3600/api/invoices",payment.invoiceid)
        console.log(inv)
        var newdue = inv["amountdue"] - payment.amount
        inv["amountdue"] = newdue;
        if(newdue >0){
            inv["status"] = "paid"
        }else{
            inv["status"] = "partial"

        }
        updateRequest("http://localhost:3600/api/invoices" , JSON.stringify(inv))

       }
        console.log(payment)

    }

  
    render() {
        return (
            <Row>
                <Row className="w-100">
                    <Col xs="12" className="nopcol">
                        <div className="PageHeader  bg-white">
                            <div className="PageHeader-head">
                                <h1> <a href={"/admin/Clients"}> Clients </a> /  <a href={"/admin/Clients/" + this.state.user.id}> {this.state.user.lastname} {this.state.user.firstname} </a></h1>
                                <i className="fa fa-plus" onClick={this.toggle}></i> Payment
                                <a outline color="warning" className="float-right btn-sm"  href="/clientzone" > View as client
                                </a> </div>
                            
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
                        <Input type="select" name="select" id="exampleSelect" size="sm" onChange={this.mtoggle}>
                            <option>Method</option>
                            <option>Cash</option>
                            <option>Check</option>
                            <option>Transfer</option>
                        </Input>
                    </Col>
                    <Col xs="12" className="nopcol">
                        <Col xs="12">
                            <PaymentTable payments={this.state.payments} isOpen={this.state.modal} toggle={this.toggle} save={(payment)=>this.savepayment(payment)} invoices={this.state.unpaid} />
                        </Col>
                    </Col>
                </Row>
            </Row>)
    }
}

export default ClientInvoice;


