import React, { Component } from 'react'
import { Badge, Row, Col, Dropdown, DropdownItem, Input, Button } from 'reactstrap';
import classnames from 'classnames';
import { accounts } from '../../db'
import { clients } from '../../db'
import ClientHeader from './components/Header'



function ClientAccountRow(props) {
    const account = props.act

    if(account.Payments.toString()){
return(
    <tr  className="light-blue" key={account.id.toString()}>
    <td>{account.Date}</td>
    <td>{account.Item}</td>
    <td>{account.Invoiced}</td>
    <td>{account.Payments}</td>
    <td>{account.Balance}</td>
</tr>
)
    }else{

    return (
        <tr key={account.id.toString()}>
            <td>{account.Date}</td>
            <td>{account.Item}</td>
            <td>{account.Invoiced}</td>
            <td>{account.Payments}</td>
            <td>{account.Balance}</td>
        </tr>
    )
}
}


class ClientInvoice extends Component {
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

    componentDidMount() {
        console.log(this.state)
        const theuser = clients.find(user => user.id.toString() === this.props.match.params.id)

        this.setState({
            user: theuser
        });
    }

    render() {
        return (
            <Row>
                <Row className="w-100">
                    <Col xs="12" className="nopcol">
                        <div className="PageHeader  bg-white">
                            <div className="PageHeader-head">
                            <h1> <a href={"/#Clients" }> Clients </a> /  <a href={"/#Clients/" + this.state.user.id}> {this.state.user.LastName} {this.state.user.FirstName} </a></h1>
                            </div>
                            <ClientHeader userID={this.state.user.id} active={"Statement"} />
                        </div>
                    </Col>
                </Row>
                <Row className="w-100 p-3">
                <Col xs="2" className="p-2">
                        <Button outline color="warning" className="btn-sm">Export</Button>{' '}
                    </Col>
                    <Col xs="8" className="p-2">
                    </Col>
                    <Col xs="2" className="p-2">
                        <Input type="select" name="select" id="exampleSelect" bsSize="sm">
                            <option>Last 4 Month</option>
                            <option>ALL</option>
                            <option>This year</option>
                        </Input>
                    </Col>
                    <Col xs="12" className="nopcol">
                        <Col xs="12"><table class=" bg-white table table-hover table-sm table-striped table-bordered">
                            <thead>
                                <tr>
                                <th scope="col">DATE</th>
                                <th scope="col">NAME</th>
                                    <th scope="col">ITEM</th>
                                    <th scope="col">INVOICED</th>
                                    <th scope="col">PAYMENT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {accounts.map((act, index) =>
                                    <ClientAccountRow key={index} act={act} />
                                )}
                            </tbody>
                        </table></Col>
                    </Col>
                </Row>
            </Row>)
    }
}

export default ClientInvoice;


