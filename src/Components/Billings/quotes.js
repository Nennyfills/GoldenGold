import React, { Component } from 'react'
import { Row, Col,  } from 'reactstrap';
import {QuoteTable} from '../../Operations/Quotes'
import Header from './Components/Header'
import { getonebyid, getall } from '../../utilities/apicalls'

class Quotes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            quotes: []
        };

    }
    async componentDidMount() {
        var quotes = await getall("http://localhost:3600/api/quotes")

        this.setState({
            quotes: quotes
        });
    }

    render() {
        return (
            <Row>
                <Row className="w-100">
                    <Col xs="12" className="nopcol">
                    <Header section="Quotes"/>

                    </Col>
                </Row>
                <Row className="w-100 p-3">
                <QuoteTable quotes ={this.state.quotes}/>
</Row>
            </Row>
        )
    }
}


export default Quotes;


