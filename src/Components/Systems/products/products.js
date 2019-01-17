import React, {Component} from 'react'
import {Row , Col} from 'reactstrap'
import ServiceHeader from '../conponents/Header';
import {ProductTable} from '../../../Operations/Products'
import { getonebyid, getall } from '../../../utilities/apicalls'

class Product extends Component{
constructor(props){
    super(props)

    this.state={products:[]}
}
    async componentDidMount() {
        var products = await getall("http://localhost:3600/api/products")
         this.setState({
            products:products
        })
      
    }

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
        <ProductTable products={this.state.products} />

</Row>
        </Row>)
    }
}

export default Product