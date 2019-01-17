import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import Header from './Components/Header'
import { InvoiceTable } from '../../Operations/Invoices';
import { getonebyid, getall } from '../../utilities/apicalls'


class Invoices extends Component {

    constructor(props) {
        super(props);

        this.state = {
            invoices: []
        };
    }
    async componentDidMount() {
        var invoices = await getall("http://localhost:3600/api/invoices")

        this.setState({
            invoices: invoices
        });
    }
    
    
    toggle() {
        this.setState(prevState => ({dropdownOpen: !prevState.dropdownOpen
        }));
    }
    render() {
        return (
            <Row>
                <Row className="w-100">
                    <Col xs="12" className="nopcol">
                    <Header section="Invoices"/>

                    </Col>
                </Row>
                <Row className="w-100 p-3">
                <InvoiceTable invoices ={this.state.invoices}/>

</Row>
            </Row>
        )
    }
}


export default Invoices

