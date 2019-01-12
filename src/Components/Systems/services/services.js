import React, {Component} from 'react'
import {Row , Col} from 'reactstrap'
import ServiceHeader from '../conponents/Header';
import {ServiceTable} from '../../../Operations/Services'
import { getonebyid, getall } from '../../../utilities/apicalls'

class service extends Component{
    constructor(props){
        super(props)

        this.state={
            services:[]
        }
    }

    componentDidMount(){
        getall("http://localhost:3600/api/services").then((data)=>{
            console.log(data) 
            this.setState({
                services:data
            });
           })
    }
      
    
    render(){
        return( <Row className="w-100">
        <Row className="w-100">
        <Col xs="12" className="nopcol">
            <div className="PageHeader  bg-white">
                <div className="PageHeader-head">
                    <h1>services / </h1>
                    <a href={"/admin/system/services/create"}>  <i className="fa fa-plus"></i> services </a>
                </div>
                <ServiceHeader active={"Service"} />
            </div>
        </Col>
        </Row>
        <Row className="w-100 p-3">
        <ServiceTable services={this.state.services} />
</Row>
        </Row>)
    }
}

export default service