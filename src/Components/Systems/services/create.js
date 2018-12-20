import React, {Component} from 'react'
import {Row , Col} from 'reactstrap'
import ServiceHeader from '../conponents/Header';
import {services} from '../../../data'
import {ServiceTable, DisplayService, CreateService} from '../../../Operations/Services'

class service extends Component{
    constructor(props){
        super(props)
        this.state = {
            service:{}
        }
        this.saveproduct = this.saveproduct.bind(this);

    }

    componentDidMount(){
        var theservice = services.find(service => service.id.toString() === this.props.match.params.id)
        this.setState({
            service :theservice
        })
    }

    saveproduct(service){
        //APICall()
        console.log("service")
        console.log(service)
    }

    render(){
        return( <Row className="w-100">
        <Row className="w-100">
        <Col xs="12" className="nopcol">
            <div className="PageHeader  bg-white">
                <div className="PageHeader-head">
                    <h1>services / </h1>
                    <a href={"#/systems/createservice/"}>  <i className="fa fa-plus"></i> services </a>
                </div>
            </div>
        </Col>
        </Row>
        <Row className="w-100 p-3">
        <CreateService  save ={(service) => this.saveproduct(service)} />
</Row>
        </Row>)
    }
}

export default service