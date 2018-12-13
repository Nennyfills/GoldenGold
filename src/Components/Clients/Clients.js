import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table, Input, Button } from 'reactstrap';

import { clients } from '../../data'




function ClientRow(props) {
  const user = props.user
  const userLink = `#/clients/${user.id}`
  const editLink = `#/clients/edit/${user.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={user.id.toString()}>
      <th style={{ textAlign: "center" }} scope="row"><a href={userLink}>{user.id}</a></th>
      <td><a href={userLink} className="text-black-50">{user.FirstName} {user.LastName}</a></td>
      <td>{user.Balance}</td>
      <td>{user.Serviceplans}</td>
      <td>{user.Connectedto}</td>
      <td><Badge color={getBadge(user.status)}>{user.status}</Badge></td>
      <td style={{ textAlign: "center" }}><a href={editLink} className="text-black-50"><i className="fa fa-pen-fancy"></i> </a></td>

    </tr>
  )
}
class Clients extends Component {

  constructor(props) {
    super(props);

    this.state = {
      clients: []
    };
    this.ActiveClient = this.ActiveClient.bind(this);
    this.InActiveClient = this.InActiveClient.bind(this);
    this.showAll = this.showAll.bind(this);
this.searchName = this.searchName.bind(this);
this.querying = this.querying.bind(this);
this.clear = this.clear.bind(this);
  }

  componentDidMount() {
    this.setState({
      clients: clients , showing :"all"
    });
  }

  ActiveClient() {
    const theuser = this.state.clients.filter(user => user.status.toString().toLowerCase() == "active")
    this.setState({
      clients: theuser, showing :"active"
    });
  }

  showAll() {
    this.setState({
      clients: clients , showing :"all"
    });
  }

  
  InActiveClient() {
    const theuser = this.state.clients.filter(user => user.status.toString().toLowerCase() == "inactive")
    this.setState({
      clients: theuser , showing :"inactive"
    });
  }

  searchName(){
var query = this.state.query
    const theuser = this.state.clients.filter(user => user.FirstName.toString().toLowerCase().includes(query) ||  user.LastName.toString().toLowerCase().includes(query))
    this.setState({
      clients: theuser , showing :"all"
    });
  }

  querying(e){
    this.setState({
      query : e.target.value
    });
  }
  clear(){
    this.setState({
      query : ""

    })
  }
  render() {



    const clientList = this.state.clients.filter((user) => user.ID > 0)
    return (
      <Row>
        <Row className="w-100">
          <Col xs="12" className="nopcol">
            <div className="PageHeader  bg-white">
              <div className="PageHeader-head">
                <h1>Clients</h1> <a href="#/clients/new" className="add-btn"> <i style={{ verticalAlign: "bottom" }} class="material-icons">add</i>
                </a>
              </div>
              <div className="pageheader-body pl-4 pt-2">
                <ul className="mytabnav">

                  <li className={this.state.showing == "all" ? "mytabnav-active" : ""} onClick={this.showAll}>          <a>All Client</a>
                  </li>
                  <li className={this.state.showing == "active" ? "mytabnav-active" : ""} onClick={this.ActiveClient}>          <a>Active Client</a>
                  </li>
                  <li className={this.state.showing == "inactive" ? "mytabnav-active" : ""} onClick={this.InActiveClient}>          <a>Suspended Client</a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="w-100 default-bg p-4">
          <Col xs="5"> <a className="lh36 text-black-50"> {new Date().toDateString()} </a> || <a className="text-black-50">Export Data</a> </Col>
          <Col xs="6"> <form>
            <div class="form-row">
              <div class="col">
                <input type="text" class="form-control" placeholder="Search Here" onChange={this.querying}  value={this.state.query} />
              </div>

            </div>
          </form> </Col>
          <Col xs="1" className="nopcol">
            <i class="fa fa-times lh36 text-black-50"  onClick={this.clear}></i>
            <i class="fa fa-check-circle pl-3 lh36 text-black-50" onClick={this.searchName}></i>
          </Col>

        </Row>
        <Row className="w-100  pl-3 pr-3 pt-0 pb-2">
          <Col xs="12"><table class=" bg-white table table-hover table-sm table-striped table-bordered">
            <thead>
              <tr>
                <th style={{ textAlign: "center" }} scope="col">ACT NO</th>
                <th scope="col">NAME</th>
                <th scope="col">BALANCE</th>
                <th scope="col">SERVICE PLAN</th>
                <th scope="col">CONNECTED TO</th>
                <th scope="col">STATUS</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.clients.map((user, index) =>
                <ClientRow key={index} user={user} />
              )}
            </tbody>
          </table></Col>
        </Row>
      </Row>
    )
  }
}

export default Clients;