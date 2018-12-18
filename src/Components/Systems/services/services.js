import React, {Component} from 'react'
import {Row , Col} from 'reactstrap'
import ServiceHeader from '../conponents/Header';
import {services} from '../../../data'
import {ServiceTable} from '../../../Operations/Services'

class service extends Component{
    render(){
        return( <Row className="w-100">
        <Row className="w-100">
        <Col xs="12" className="nopcol">
            <div className="PageHeader  bg-white">
                <div className="PageHeader-head">
                    <h1>services / </h1>
                    <a href={"#/system/services/create"}>  <i className="fa fa-plus"></i> services </a>
                </div>
                <ServiceHeader active={"Service"} />
            </div>
        </Col>
        </Row>
        <Row className="w-100 p-3">
        <ServiceTable services={services} />
</Row>
        </Row>)
    }
}

export default service