import React, {Component} from 'react'
import {Row , Col} from 'reactstrap'
import { DisplayProduct } from '../../../Operations/Products';
import { getonebyid, getall } from '../../../utilities/apicalls'

class Product extends Component{
constructor(props){
    super(props)
    this.state = {
        product:{}
    }
}

async componentDidMount(){
    var theproduct =   await getonebyid("http://localhost:3600/api/products", this.props.match.params.id)
    this.setState({
        product :theproduct
    })
}

    render(){
        return( <Row className="w-100">
        <Row className="w-100">
        <Col xs="12" className="nopcol">
            <div className="PageHeader  bg-white">
                <div className="PageHeader-head">
                    <h1>Products / {this.state.product.Label} </h1>
                    <a href={"#/system/products/create"}>  <i className="fa fa-plus"></i> Products </a>

                </div>
            </div>
        </Col>
        </Row>
        <Row className="w-100 p-3">
        <DisplayProduct product={this.state.product}/>
        </Row>
        </Row>)
    }
}

export default Product