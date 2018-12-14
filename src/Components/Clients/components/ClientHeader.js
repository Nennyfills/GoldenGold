import React, { Component } from 'react'

class ClientHeader extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="pageheader-body pl-4 pt-2">
                <ul className="mytabnav" style={{ fontWeight: "lighter", fontSize: "smaller" }}>

                    <li className="">          <a href={"#/clients/" + this.props.userID} >Overview</a>
                    </li>
                    <li >          <a href={"#/clients/payments/list/" + this.props.userID}>Payments</a>
                    </li>
                    <li className="mytabnav-active">          <a href={"#/clients/invoices/list/" + this.props.userID}>Invoices</a>
                    </li>
                    <li>          <a href={"#/clients/Refunds/list/" + this.props.userID}>Refunds</a>
                    </li> <li>          <a href={"#/clients/Accounts/list/" + this.props.userID}>Account Statement</a>
                    </li>
                    <li>          <a href={"#/clients/Documents/list/" + this.props.userID}>Documents</a>
                    </li>
                    <li>          <a href={"#/clients/tickets/list/" + this.props.userID}>Tickets</a>
                    </li>
                </ul>
            </div>
            )
    }
}


export default ClientHeader;