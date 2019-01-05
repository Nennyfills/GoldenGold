import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table, Input, Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import { clients } from '../../db'
import {searchObjectListbyid , searchObjectListbyvalue} from '../../Controller/controller'


function ClientRow(props) {
  const user = props.user
  const userLink = `/admin/clients/${user.id}`
  const editLink = `/admin/clients/edit/${user.id}`

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
    this.ActiveClientCount = this.ActiveClientCount.bind(this);
    this.InActiveClient = this.InActiveClient.bind(this);
    this.showAll = this.showAll.bind(this);
    this.searchName = this.searchName.bind(this);
    this.querying = this.querying.bind(this);
    this.clear = this.clear.bind(this);
  }

  componentDidMount() {
    this.setState({
      clients: clients, showing: "all"
    });
  }

  ActiveClientCount(){
    return    clients.filter(user => user.status.toString().toLowerCase() == "active").length

  }

  ActiveClient() {
    const theuser = this.state.clients.filter(user => user.status.toString().toLowerCase() == "active")
    this.setState({
      clients: theuser, showing: "active"
    });
  }

  showAll() {
    this.setState({
      clients: clients, showing: "all"
    });
  }


  InActiveClient() {
    const theuser = this.state.clients.filter(user => user.status.toString().toLowerCase() == "inactive")
    this.setState({
      clients: theuser, showing: "inactive"
    });
  }

  searchName() {
    var query = this.state.query
    let theuser =     searchObjectListbyvalue(this.state.clients , "FirstName" , query);

    this.setState({
      clients: theuser, showing: "all"
    });
  }

  querying(e) {
    this.setState({
      query: e.target.value
    });
  }
  clear() {
    this.setState({
      query: ""

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
                <h1>Clients</h1> <a href="/admin/clients/new" className="add-btn"> <i style={{ verticalAlign: "bottom" }} class="material-icons">add</i>
                </a>
              </div>
              <div className="pageheader-body pl-4 pt-2">
                <ul className="mytabnav">

                  <li className={this.state.showing == "all" ? "mytabnav-active" : ""} onClick={this.showAll}>          <a>All Client <span className="text-info"> {clients.length}</span></a>
                  </li>
                  <li className={this.state.showing == "active" ? "mytabnav-active" : ""} onClick={this.ActiveClient}>          <a>Active Client <span className="text-success"> {this.ActiveClientCount()}</span></a>
                  </li>
                  <li className={this.state.showing == "inactive" ? "mytabnav-active" : ""} onClick={this.InActiveClient}>          <a>Suspended Client</a>
                  </li>

                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="w-100 default-bg p-4">
          <Col xs="5"> <a href="#" className="text-black-50 btn btn-sm">Export Data</a> <a className="small text-black-50"> {new Date().toDateString()} </a>   </Col>
          <Col xs="6"> <form>
            <div class="form-row">
              <div class="col">
                <input type="text" class="form-control" placeholder="Search Here" onChange={this.querying} value={this.state.query} />
              </div>

            </div>
          </form> </Col>
          <Col xs="1" className="nopcol">
            <i class="fa fa-times lh36 text-black-50" onClick={this.clear}></i>
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

          </table>
          </Col>
          <Row className="w-100">
            <Col sm="2">
              <Input type="select" name="select" id="itemSelect" bsSize="sm">
            <option>15 Item</option>
            <option>30 Items</option>
            <option>45 Items</option>
            <option>60 Items</option>
            <option>75 Items</option>
          </Input>
          </Col>
          <Col sm="8">
                <ButtonToolbar className="float-right">
                  <ButtonGroup size="sm">
                    <Button className="br-5">1</Button>
                    <Button className="br-5">2</Button>
                    <Button className="br-5">3</Button>
                    <Button className="br-5">4</Button>
                  </ButtonGroup>
                </ButtonToolbar>
            </Col>
          </Row>
        </Row>
      </Row>
    )
  }
}

export default Clients;
