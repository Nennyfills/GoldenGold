import React, {Component} from 'react'
import {Row , Col} from 'reactstrap'
import {DisplayQuote} from '../../../Operations/Quotes'
import { getonebyid } from '../../../utilities/apicalls'

class ClientSinglequote extends Component{

    constructor(props){
        super(props)
        this.state = {
            user: {},
            quote: {}
        };
        this.ClientBrief = this.ClientBrief.bind(this);

    }

    ClientBrief() {
        var user  = this.state.user
          return (
            <div>
              <h6>{user.LastName}</h6> <label>{user.id} {user.type}</label>
              <h6>Address: </h6>
              <label>{user.houseAddress}</label>
              <label>{user.streetAddress}</label>
              <label>{user.city}</label>
              <label>{user.state}</label>
              <label>{user.phone}</label>
              <label>{user.email}</label>
        </div>  )
      }

    async componentDidMount() {
       var user = await getonebyid("http://localhost:3600/api/clients", this.props.match.params.uid)
        var thequote = await getonebyid("http://localhost:3600/api/quotes", this.props.match.params.id)
        

        this.setState({
            user: user,
            quotes: thequote
        });
    }


    render(){
        return( <Row className="w-100">
            <Row className="w-100">
                <Col xs="12" className="nopcol">
                    <div className="PageHeader  bg-white">
                        <div className="PageHeader-head">
                            <h1> {this.state.user.lastname} {this.state.user.firstname}/ quote</h1>
                            <a href={"/admin/clients/Createquote/" + this.state.user.id }>  <i className="fa fa-plus"></i> quote </a>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="w-100 p-3">
            <Row className="w-100 bg-white pl-4 pr-4">
            <DisplayQuote quote = {this.state.quote} brief = {this.ClientBrief()}/>
            </Row>
            </Row>
        </Row>)
    }
}

export default ClientSinglequote