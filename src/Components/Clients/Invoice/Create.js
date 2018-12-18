import React, { Component } from 'react'
import { Badge, Row, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { invoices } from '../../../data'
import { clients, products, services } from '../../../data'
import { CreateInvoice } from '../../../Operations/Invoices'
import ClientHeader from '../components/ClientHeader'


class ClientInvoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}, dropdownOpen: false , summary:{} , currentItems :[]
        };
        this.ClientBrief = this.ClientBrief.bind(this);
        this.addproduct = this.addproduct.bind(this);
        this.addservice = this.addservice.bind(this);
        this.qchange = this.qchange.bind(this);
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
        console.log(this.state)
        const theuser = clients.find(user => user.id.toString() === this.props.match.params.id)
        this.setState({
            user: theuser
        });
    }

     addproduct(product) {
    
        product.Quantity = 1;
        product.Totalprice = product.Quantity * product.Price;
        this.setState( {currentItems: [ ...this.state.currentItems ,  product]}, () => { 
        this.updateSummary(this.state.currentItems)
    });
     }
    addservice(service) {
        service.Quantity = 1;
        service.Totalprice = service.Quantity * service.Price;
        this.setState( {currentItems: [ ...this.state.currentItems ,  service]}, () => { 
        this.updateSummary(this.state.currentItems)
    });
    
    }

    qchange(value , id ){
        console.log(id)
        let newitems = [ ...this.state.currentItems];
        //find(user => user.id.toString() ===
        var target = newitems.find(item => item.id.toString() == id )  //creating copy of object
        target.Quantity = value
        target.Totalprice = target.Quantity * target.Price
        this.setState( {currentItems: [ ...this.state.currentItems] ,  [target]: target}, () => { 

        })
    }

    updateSummary(currentItems){
        var totalP = 0;
        var paid = 0
        let summary = Object.assign({}, this.state.summary);    //creating copy of object
        currentItems.forEach(element => {
            totalP = totalP +  Number(element.Totalprice)
        });
        summary.Subtotal = totalP;
        summary.Amountdue = totalP;
        summary.Totalprice = totalP;
        summary.Ammountpaid = paid; 

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
                                <h3>Clients / {this.state.user.LastName} {this.state.user.FirstName}/ Add Invoice</h3>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="w-100 p-3">
                    <Col xs="12" className="nopcol">
                        <Col xs="12" className="p-3 bg-white" >
                            <CreateInvoice brief = {this.ClientBrief()}   products = {products} services = {services} addproduct = {(product) =>this.addproduct(product)} addservice = {(service) =>this.addservice(service)}  currentItems = {this.state.currentItems} summary= {this.state.summary} qchange ={(value, id)=>this.qchange(value, id)}/>
                        </Col>
                    </Col>
                </Row>
            </Row>
          )
    }
}

export default ClientInvoice;
