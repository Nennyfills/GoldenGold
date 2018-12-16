import React, {Component} from 'react'

class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return( <div className="PageHeader  bg-white">
        <div className="PageHeader-head">
            <h1>Billings / {this.props.section}</h1>

        </div>
        <div className="pageheader-body pl-4 pt-2">
            <ul className="mytabnav" style={{ fontWeight: "lighter", fontSize: "smaller" }}>

                <li className="mytabnav-active">          <a href={"#/billing/invoices"} >Invoices</a>
                </li>
                <li>          <a href={"#/billing/quotes"}>Quotes</a>
                </li>
                <li>          <a href={"#/billing/payments"}>Payments</a>
                </li>
                <li>          <a href={"#/billing/Refunds"}>Refunds</a>
                </li>
            </ul>
        </div>
    </div>)
    }
} 

export default Header;