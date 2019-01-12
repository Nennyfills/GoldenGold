import React, { Component } from 'react'
import { Badge, Row, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { invoices } from '../../../db'
import { CreateInvoice } from '../../../Operations/Invoices'
import ClientHeader from '../components/ClientHeader'
import { getonebyid, getall, postRequest } from '../../../utilities/apicalls'
import { randomid } from '../../../utilities/validate'


class ClientInvoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}, dropdownOpen: false , summary:{} , currentItems :[], iid:""
        };

        this.ClientBrief = this.ClientBrief.bind(this);
        this.addproduct = this.addproduct.bind(this);
        this.addservice = this.addservice.bind(this);
        this.qchange = this.qchange.bind(this);
        this.saveinvoice = this.saveinvoice.bind(this);
        this.invoiceobject ={}
        this.goBack = this.goBack.bind(this);
        this.inid = "";
        this.products =[];
        this.services =[];
         getall("http://localhost:3600/api/products", this.props.match.params.id).then((data) => {
           this.products=  data
        })
        this.services =[];
         getall("http://localhost:3600/api/services", this.props.match.params.id).then((data) => {
            this.services= data
        })

    }

    goBack(){
        this.props.history.goBack();
    }
    ClientBrief() {
      var user  = this.state.user
        return (
          <div className="small">
            <div className="bold">{user.LastName}</div> <label>{user.id}  ---- {user.type}</label>
            <p>Address: </p>
            <div className="smalller">
            <label>{user.houseAddress}</label> --
            <label>{user.streetAddress}</label> --
            <label>{user.city}</label> --
            <label>{user.state}</label> --
            <label>{user.phone}</label>  -- 
            <label>{user.email}</label></div>
      </div>  )
    }

    componentDidMount() {

        var cid = this.props.match.params.id;
        getonebyid("http://localhost:3600/api/clients", cid).then((data) => {
            this.setState({
                user:data,
               
                })  
               randomid(6).then((data)=>{
                this.invoiceobject["id"] = data;
                this.invoiceobject["cid"] = cid;
                this.invoiceobject["datetime"] = new Date();
                this.setState({
                    iid:data,
                   
                    }); console.log(this.state)

                })
            })
    }

    saveinvoice(invoice){
        this.invoiceobject["items"] = this.state.currentItems
        this.invoiceobject["status"] = "unpaid"
        var today = new Date();
var duedate = new Date();
duedate.setDate(today.getDate()+ parseInt(invoice.duein? invoice.duein:0));
        this.invoiceobject["datedue"] = duedate
        console.log(invoice)
         postRequest('http://localhost:3600/api/invoices', JSON.stringify(this.invoiceobject)).then(()=>{ }).catch(()=>{})
         this.goBack()
        console.log(this.invoiceobject)
    }
     addproduct(product) {
    
        product.quantity = 1;
        product.totalprice = product.quantity * product.price;
        this.setState( {currentItems: [ ...this.state.currentItems ,  product]}, () => { 
        this.updateSummary(this.state.currentItems)
    });
     }
    addservice(service) {
        service.quantity = 1;
        service.totalprice = service.quantity * service.price;
        this.setState( {currentItems: [ ...this.state.currentItems ,  service]}, () => { 
        this.updateSummary(this.state.currentItems)
    });
    
    }

    qchange(value , id ){
        console.log(id)
        let newitems = [ ...this.state.currentItems];
        var target = newitems.find(item => item.id.toString() == id )  //creating copy of object
        target.quantity = value
        target.totalprice = target.quantity * target.price
        this.setState( {currentItems: [ ...this.state.currentItems] ,  [target]: target}, () => { 
            this.updateSummary(this.state.currentItems)

        })
    }

    updateSummary(currentItems){
        var totalP = 0;
        var paid = 0
        let summary = Object.assign({}, this.state.summary);    //creating copy of object
        currentItems.forEach(element => {
            totalP = totalP +  Number(element.totalprice)
        });
        summary.subtotal = totalP;
        summary.amountdue = totalP;
        summary.totalprice = totalP;
        summary.ammountpaid = paid; 
        this.invoiceobject["amountdue"] = totalP
        this.invoiceobject["total"] = totalP
        this.setState({summary : summary} , () =>{

        });

    }


    render() {
        return (
            <Row className="w-100">
                <Row className="w-100">
                    <Col xs="12" className="nopcol">
                        <div className="PageHeader  bg-white">
                            <div className="PageHeader-head">
                                <h3><a href="/admin/Clients"> Clients </a> /  <a href={"/admin/Clients/" + this.state.user.id}> {this.state.user.LastName} {this.state.user.FirstName} </a>/ Add Invoice</h3>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="w-100 p-3">
                    <Col xs="12" className="nopcol">
                        <Col xs="12" className="p-3 bg-white" >
                            <CreateInvoice brief = {this.ClientBrief()} id={this.state.iid}   products = {this.products} services = {this.services} addproduct = {(product) =>this.addproduct(product)} addservice = {(service) =>this.addservice(service)}  currentItems = {this.state.currentItems} summary= {this.state.summary} qchange ={(value, id)=>this.qchange(value, id)} save={(invoiceobj)=>this.saveinvoice(invoiceobj)}/>
                        </Col>
                    </Col>
                </Row>
            </Row>
          )
    }
}

export default ClientInvoice;
