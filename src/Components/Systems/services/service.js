import React, {Component} from 'react'
import {Row , Col} from 'reactstrap'
import ServiceHeader from '../conponents/Header';
import {ServiceTable, DisplayService} from '../../../Operations/Services'
import { getonebyid, getall } from '../../../utilities/apicalls'

class service extends Component{
    constructor(props){
        super(props)
        this.state = {
            service:{}
        }
    }

    async componentDidMount(){
        var theservice =   await getonebyid("http://localhost:3600/api/services", this.props.match.params.id)
        this.setState({
            setvice :theservice
        })
    }
    render(){
        return( <Row className="w-100">
        <Row className="w-100">
        <Col xs="12" className="nopcol">
            <div className="PageHeader  bg-white">
                <div className="PageHeader-head">
                    <h1>services / </h1>
                    <a href={"#/systems/create/service"}>  <i className="fa fa-plus"></i> services </a>
                </div>
            </div>
        </Col>
        </Row>
        <Row className="w-100 p-3">
        <DisplayService service={this.state.service} />
</Row>
        </Row>)
    }
}

export default service