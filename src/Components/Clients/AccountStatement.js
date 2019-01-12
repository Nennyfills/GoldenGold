import React, { Component } from 'react'
import { Row, Col,  Input, Button } from 'reactstrap';
import { accounts } from '../../db'
import ClientHeader from './components/Header'
import { getonebyid, getall, postRequest } from '../../utilities/apicalls'



function ClientAccountRow(props) {
    const account = props.act

    if(account.payments){
return(
    <tr  className="light-blue"  key={account.id.toString()}>
    <td>{account.date}</td>
    <td>{account.id}</td>
    <td>{account.invoice}</td>
    <td>{account.payment}</td>
    <td>{account.Balance}</td>
</tr>
)
    }else{

    return (
        <tr key={account.id.toString()}>
            <td>{account.date}</td>
            <td>{account.id}</td>
            <td>{account.invoice}</td>
            <td>{account.payment}</td>
            <td>{account.Balance}</td>
        </tr>
    )
}
}


class ClientInvoice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}, acctrecord:[]
        };

    }


  

    async componentDidMount() {
        console.log(this.state)
        var user = await getonebyid("http://localhost:3600/api/clients", this.props.match.params.id)
        var payments = await getall("http://localhost:3600/api/payments?cid="+ user.id)
        var invoices = await getall("http://localhost:3600/api/invoices?cid="+ user.id)
        var refunds = await getall("http://localhost:3600/api/refunds?cid="+ user.id)
        var acctrecord = []
        
        payments.forEach(element => {
          var item = {};
          item["date"] = element.datetime
          item["id"] = "payments - " + element.id
          item["payment"] = element.amount
            acctrecord.push(item)
        });

        invoices.forEach(element => {
            var item = {};
            item["date"] = element.datetime
            item["id"] = "invoice -  " + element.id
            item["invoice"] = element.total
              acctrecord.push(item)
          });

          acctrecord.sort(function(a, b){return new Date(a.date) -  new Date(b.date)});


        this.setState({
            user: user, acctrecord :acctrecord
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
                                    <th scope="col">INVOICED</th>
                                    <th scope="col">PAYMENT</th>
                                    <th scope="col">BALANCE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.acctrecord.map((act, index) =>
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


