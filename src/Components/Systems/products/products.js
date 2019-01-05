import React, {Component} from 'react'
import {Row , Col} from 'reactstrap'
import ServiceHeader from '../conponents/Header';
import {products} from '../../../db'
import {ProductTable} from '../../../Operations/Products'
class Product extends Component{
    render(){
        return( <Row className="w-100">
        <Row className="w-100">
        <Col xs="12" className="nopcol">
            <div className="PageHeader  bg-white">
                <div className="PageHeader-head">
                    <h1>Products / </h1>
                    <a href={"#/system/products/create"}>  <i className="fa fa-plus"></i> Products </a>
                </div>
                <ServiceHeader active={"Product"} />
            </div>
        </Col>
        </Row>
        <Row className="w-100 p-3">
        <ProductTable products={products} />

</Row>
        </Row>)
    }
}

export default Product