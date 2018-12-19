import React, {Component} from 'react'
import {Row , Col} from 'reactstrap'
import { clients } from '../../../data'
import { invoices , invoiceItems  } from '../../../data'
import {DisplayInvoice} from '../../../Operations/Invoices'
class ClientSingleInvoice extends Component{

    constructor(props){
        super(props)
        this.state = {
            user: {},
            invoice: {},
            theinvoiceItems:[] , summary:{}
        };
        this.ClientBrief = this.ClientBrief.bind(this);
    }

    ClientBrief() {
        var user  = this.state.user
          return (
            <div>
              <h6>{user.LastName}</h6> <label>{user.id} {user.type}</label>
              <h6>Address: </h6>
              <label>{user.houseAddress}</label>
              <label>{user.streetAddress}</label>
              <label>{user.city}</label>
              <label>{user.state}</label>
              <label>{user.phone}</label>
              <label>{user.email}</label>
        </div>  )
      }

    componentDidMount() {
        console.log(this.state)
        const theuser = clients.find(user => user.id.toString() === this.props.match.params.uid)
        
        const theinvoice = invoices.find(invoice => invoice.id.toString() === this.props.match.params.id)
        const theinvoiceItems = invoiceItems.filter(invoices => invoices.InvoiceID.toString() === this.props.match.params.id)

        this.getSummary(theinvoiceItems)
        this.setState({
            user: theuser,
            invoice: theinvoice,
            theinvoiceItems : theinvoiceItems
        });
    }

    getSummary(params) {
        var totalP = 0;
        var paid = 0;
         let summary = {}
         params.forEach(element => {            
            totalP = totalP +  Number(element.TotalPrice)
        });
        summary.Subtotal = totalP;
        summary.Amountdue = totalP;
        summary.Totalprice = totalP;
        summary.Ammountpaid = paid; 

        this.setState({summary : summary} , () =>{
            console.log("rdjtygujo")
        });
  }

    render(){
        return( <Row className="w-100">
            <Row className="w-100">
                <Col xs="12" className="nopcol">
                    <div className="PageHeader  bg-white">
                        <div className="PageHeader-head">
                            <h1>  <a href={"/#Clients/" + this.state.user.id}> {this.state.user.LastName} {this.state.user.FirstName} </a>/ Invoice</h1>
                            <a href={"#/clients/CreateInvoice/" + this.state.user.id }>  <i className="fa fa-plus"></i> Invoice </a>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="w-100 p-3">
            <Row className="w-100 bg-white">
            <DisplayInvoice invoice = {this.state.invoice} brief = {this.ClientBrief()} invoiceItems={this.state.theinvoiceItems} summary={this.state.summary}/>
            </Row>
            </Row>
        </Row>)
    }
}

export default ClientSingleInvoice