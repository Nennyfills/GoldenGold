import React, {Component} from 'react'
import {Row , Col} from 'reactstrap'
import ServiceHeader from '../conponents/Header';
import {ServiceTable, DisplayService, CreateService} from '../../../Operations/Services'
import {postRequest} from '../../../utilities/apicalls'
import { Redirect } from 'react-router-dom'
import {validservice} from '../../../utilities/validate'
class service extends Component{
    constructor(props){
        super(props)
        this.state = {
            service:{}
        }
        this.submitform = this.submitform.bind(this);

    }

    componentDidMount(){
     
    }

   

    submitform(service) {
       console.log(service)
        if (validservice(service)) {

            postRequest('http://localhost:3600/api/services', JSON.stringify(service)).then(()=>{ this.setState({
                goback: true
            })}).catch(()=>{})
        } else {
            this.setState({
                errors:"block"
            })
        }
    }

    render(){
        return( <Row className="w-100">
        <Row className="w-100">
        <Col xs="12" className="nopcol">
            <div className="PageHeader  bg-white">
                <div className="PageHeader-head">
                    <h1>services / </h1>
                    <a href={"/admin/systems/createservice/"}>  <i className="fa fa-plus"></i> services </a>
                </div>
            </div>
        </Col>
        </Row>
        <Row className="w-100 p-3">
        <CreateService  save ={(service) => this.submitform(service)} />
</Row>
        </Row>)
    }
}

export default service