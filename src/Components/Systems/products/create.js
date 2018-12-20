import React, {Component} from 'react'
import {Row , Col} from 'reactstrap'
import {CreateProduct} from '../../../Operations/Products'

class Create extends Component{
    render(){
        return( <Row className="w-100">
        <Row className="w-100">
        <Col xs="12" className="nopcol">
            <div className="PageHeader  bg-white">
                <div className="PageHeader-head">
                    <h1>Add Products  </h1>
                </div>
            </div>
        </Col>
        </Row>
        <Row className="w-100 p-3">
        <CreateProduct  />
</Row>
        </Row>)
    }
}

export default Create