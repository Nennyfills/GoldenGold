import React, { Component } from 'react'
import { Badge, Row, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import classnames from 'classnames';
import { docs } from '../../../db'
import { clients } from '../../../db'
import {DocumentTable} from '../../../Operations/Documents'
import ClientHeader from '../components/Header'



class ClientDoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };


        this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }


    componentDidMount() {
        console.log(this.state)
        const theuser = clients.find(user => user.id.toString() === this.props.match.params.id)

        this.setState({
            user: theuser
        });
    }

    render() {
        return (
            <Row>
                <Row className="w-100">
                    <Col xs="12" className="nopcol">
                        <div className="PageHeader  bg-white">
                            <div className="PageHeader-head">
                            <h1> <a href={"/admin/Clients" }> Clients </a> /  <a href={"/admin/Clients/" + this.state.user.id}> {this.state.user.LastName} {this.state.user.FirstName} </a></h1>
                        
                                        <i className="fa fa-plus" onClick={this.toggle}></i> Document
                                        <a outline color="warning" className="float-right btn-sm"  href="/clientzone" > View as client
                                </a>  </div>
                            <ClientHeader userID={this.state.user.id} active={"Document"}/>

                        </div>
                    </Col>
                </Row>
                <Row className="w-100 p-3">
                    <Col xs="12" className="nopcol">
                        <Col xs="12">
                        <DocumentTable documents={docs} isOpen={this.state.modal} toggle={this.toggle}/>
                        </Col>
                    </Col>
                </Row>
            </Row>)
    }
}

export default ClientDoc;


