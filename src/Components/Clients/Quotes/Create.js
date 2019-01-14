import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import { CreateQuote } from '../../../Operations/Quotes'
import ClientHeader from '../components/ClientHeader'
import { getonebyid } from '../../../utilities/apicalls'


class ClientQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}, dropdownOpen: false
        };
        this.ClientBrief = this.ClientBrief.bind(this);
    }

    ClientBrief() {
      var user  = this.state.user
        return (
          <div className="small">
            <div className="bold">{user.lastname}</div> <label>{user.id}  ---- {user.type}</label>
            <p>Address: </p>
            <div className="smalller">
            <label>{user.address}</label> --
            <label>{user.city}</label> --
            <label>{user.state}</label> --
            <label>{user.phones}</label>  -- 
            <label>{user.email}</label></div>
      </div>  )
    }

    async componentDidMount() {
        console.log(this.state)
        var user = await getonebyid("http://localhost:3600/api/clients", this.props.match.params.uid)
        this.setState({
            user: user
        });
    }




    render() {
        return (
            <Row className="w-100">
                <Row className="w-100">
                    <Col xs="12" className="nopcol">
                        <div className="PageHeader  bg-white">
                            <div className="PageHeader-head">
                                <h3>Clients / {this.state.user.lastname} {this.state.user.firstname}/ Add Quote</h3>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="w-100 p-3">
                    <Col xs="12" className="nopcol">
                        <Col xs="12" className="p-3 bg-white" >
                            <CreateQuote brief = {this.ClientBrief()}  />
                        </Col>
                    </Col>
                </Row>
            </Row>
          )
    }
}

export default ClientQuote;
