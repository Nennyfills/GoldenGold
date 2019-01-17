import React, { Component } from 'react'
import {  Row, Col } from 'reactstrap';
import Header from './Components/Header'
import {RefundTable} from '../../Operations/Refunds'
import { getonebyid, getall } from '../../utilities/apicalls'

class Refunds extends Component {

    constructor(props) {
        super(props);
        this.state = {
            refunds: []
        };

    }
    async componentDidMount() {
        var refunds = await getall("http://localhost:3600/api/refunds")

        this.setState({
            refunds: refunds
        });
    }


    render() {
        return (
            <Row>
                <Row className="w-100">
                    <Col xs="12" className="nopcol">
                       <Header section="Refunds"/>
                    </Col>
                </Row>
                <Row className="w-100 p-3">
                <RefundTable refunds ={this.state.refunds}/>

</Row>
            </Row>
        )
    }
}

export default Refunds;


