import React, { Component } from 'react'
import { Row, Col} from 'reactstrap';
import { InvoiceTable } from '../../Operations/Invoices'
import { getonebyid, getall } from '../../utilities/apicalls'

class Invoices extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},  invoices: [], filters: {}
        };
    }

    async componentDidMount() {
        var user = await getonebyid("http://localhost:3600/api/clients", this.props.match.params.id)
        var invoices = await getall("http://localhost:3600/api/invoices?cid="+ user.id)

        this.setState({
            user: user, invoices:invoices
        });
    }
  
    render() {
        return (
            <Row>
                 <Row className="w-100 mb-3">
                    <Col xs="12" className="nopcol w-100">
                        <div className="PageHeader  bg-white">
                            <div className="PageHeader-head">
                            <h1> {this.state.user.firstname} {this.state.user.lastname}</h1>

                            </div>
                        </div>
                    </Col>
                </Row>
                <Col xs="12" className="nopcol">
                    <Col xs="12">
                        <InvoiceTable invoices={this.state.invoices} isOpen={this.state.modal} toggle={this.toggle} />
                    </Col>
                </Col>
            </Row>
            )
    }
}

export default Invoices