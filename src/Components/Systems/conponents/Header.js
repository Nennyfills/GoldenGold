import React, { Component } from 'react'

class ServiceHeader extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="pageheader-body pl-4 pt-2">
                <ul className="mytabnav" style={{ fontWeight: "lighter", fontSize: "smaller" }}>

                   <li className={this.props.active == "Preference" ? "mytabnav-active" : ""}>          <a href="#/system/preference">Preferences</a>
                    </li>
                     <li className={this.props.active == "Product" ? "mytabnav-active" : ""}>          <a href="#/system/products">Products</a>
                    </li>
                    <li className={this.props.active == "Service" ? "mytabnav-active" : ""}>          <a href="#/system/services">Services</a>
                    </li>
                   
                </ul>
            </div>
            )
    }
}


export default ServiceHeader;