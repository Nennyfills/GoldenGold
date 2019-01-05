import React, { Component } from 'react'
import { Row, Col,  } from 'reactstrap';
import {QuoteTable} from '../../Operations/Quotes'
import { quotes } from '../../db'
import Header from './Components/Header'

class Quotes extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);

        this.state = {
            user: {}, dropdownOpen: false
        };

    }


    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
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
                <QuoteTable quotes ={quotes}/>
</Row>
            </Row>
        )
    }
}


export default Quotes;


