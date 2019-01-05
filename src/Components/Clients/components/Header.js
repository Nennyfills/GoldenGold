import React, { Component } from 'react'

class ClientHeader extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="pageheader-body pl-4 pt-2">
                <ul className="mytabnav" style={{ fontWeight: "lighter", fontSize: "smaller" }}>

                    <li className={this.props.active == "Overview" ? "mytabnav-active" : ""}>          <a href={"/admin/clients/" + this.props.userID} >Overview</a>
                    </li>
                    <li className={this.props.active == "Payment" ? "mytabnav-active" : ""}>          <a href={"/admin/clients/payments/list/" + this.props.userID}>Payments</a>
                    </li>
                    <li className={this.props.active == "Invoice" ? "mytabnav-active" : ""}>          <a href={"/admin/clients/invoices/list/" + this.props.userID}>Invoices</a>
                    </li>
                    <li className={this.props.active == "Refund" ? "mytabnav-active" : ""}>          <a href={"/admin/clients/Refunds/list/" + this.props.userID}>Refunds</a>
                    </li> <li className={this.props.active == "Statement" ? "mytabnav-active" : ""}>          <a href={"/admin/clients/Accounts/list/" + this.props.userID}>Account Statement</a>
                    </li>
                    <li className={this.props.active == "Document" ? "mytabnav-active" : ""}>          <a href={"/admin/clients/Documents/list/" + this.props.userID}>Documents</a>
                    </li>
                    <li className={this.props.active == "Ticket" ? "mytabnav-active" : ""}>          <a href={"/admin/clients/tickets/list/" + this.props.userID}>Tickets</a>
                    </li>
                </ul>
            </div>
            )
    }
}


export default ClientHeader;