import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import {DocumentTable} from '../../../Operations/Documents'
import ClientHeader from '../components/Header'
import { getonebyid, getall } from '../../../utilities/apicalls'



class ClientDoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {} , documents:[]
        };
        this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }


   async componentDidMount() {
        var user = await getonebyid("http://localhost:3600/api/clients", this.props.match.params.id)
        var documents = await getall("http://localhost:3600/api/documents?cid="+ user.id)

        this.setState({
            user: user, documents:documents
        });
    }

    render() {
        return (
            <Row>
                <Row className="w-100">
                    <Col xs="12" className="nopcol">
                        <div className="PageHeader  bg-white">
                            <div className="PageHeader-head">
                            <h1> <a href={"/admin/Clients" }> Clients </a> /  <a href={"/admin/Clients/" + this.state.user.id}> {this.state.user.lastname} {this.state.user.firstname} </a></h1>
                        
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
                        <DocumentTable documents={this.state.documents} isOpen={this.state.modal} toggle={this.toggle}/>
                        </Col>
                    </Col>
                </Row>
            </Row>)
    }
}

export default ClientDoc;


