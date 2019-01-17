import React, { Component } from 'react'
import { Card, CardBody, CardTitle, Form, Row, Col, FormGroup, Input, Label, Button } from 'reactstrap'
import {updateRequest} from '../../utilities/apicalls'
import {valid} from '../../utilities/validate'
import { getonebyid } from '../../utilities/apicalls'
import { Redirect } from 'react-router-dom'



function ClientT(props) {
    if (props.type == "Individual") {
        console.log(props)
        return (
            <Input type="select" name="select" id="ct" onChange={props.toggle}>
                <option value="Company" >Company</option>
                <option value="Individual" selected>Individual</option>

            </Input>)
    } else {
        return (
            <Input type="select" name="select" id="ct" defaultValue="Company" onChange={props.toggle}>
                <option value="Company" selected >Company</option>
                <option value="Individual" >Individual</option>
            </Input>)
    }
}


class EditClient extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: {},
            clientType: "",
            cctype: "none",
            ictype: "none",
            newC : {}


        }
        this.toggle = this.toggle.bind(this);
        this.change = this.change.bind(this);
        this.savechanges = this.savechanges.bind(this);
                this.n={}
                this.back = this.props.navigate;
    }

    toggle(e) {
        if (e.target.value == "Individual") {
            this.setState({
                ictype: "block",
                cctype: "none"
            })
        }
        if (e.target.value == "Company") {
            this.setState({
                cctype: "block",
                ictype: "none",

            })
        }
    }

    savechanges(props){

        var newclient = this.state.newC 
        newclient["status"] = "inactive";
        newclient["balance"] = 0.0;
        if (valid(newclient)) {

            updateRequest('http://localhost:3600/api/clients', JSON.stringify(newclient)).then(()=>{  this.setState({
                goback: true
            })}).catch(()=>{})
        } else {
            this.setState({
                errors:"block"
            })
        }
    }

    change = e => {
        let newC = Object.assign({}, this.state.newC);
        newC[e.target.name] = e.target.value;
        this.n[e.target.name] = e.target.value;
        this.setState({ newC }, () => {
            console.log(this.state)
        });
    }

    componentWillMount() {
        getonebyid("http://localhost:3600/api/clients", this.props.match.params.id).then((data) => {
            this.setState({
                user: data,
                newC: data,
                clientType: data.type
            });
            if (data.type == "Individual") {
                this.setState({
                    ictype: "block",
                    cctype: "none",
                    ds: "Individual"
                })
            } else {
                this.setState({
                    cctype: "block",
                    ictype: "none",
                    ds: "Company"

                })
            }
        })
    }

    render() {
        var goal;

        if (this.state.goback == true) {
            goal = <Redirect
                to="/admin/Clients"

            />
        } else {
            goal = <hr></hr>
        }
        const { user } = this.state
        return (
            <Row>                {goal}

                <Row className="w-100 mb-3">
                    <Col xs="12" className="nopcol">
                        <div className="PageHeader  bg-white">
                            <div className="PageHeader-head">
                                <h1>Edit Client -  {user.firstname} </h1>
                            </div>
                            <div className="pageheader-body pl-4 pt-2">
                            </div>
                        </div>
                    </Col>
                </Row>


                <Row className="w-100">
                    <Col md={{ size: 9, offset: 1 }}>      <Row className="w-100">
                        <Col>
                            <Row className="w-100">
                                <Col xs="12">
                                    <Card body>
                                        <CardTitle>Client Type</CardTitle>
                                        <CardBody>
                                            <Row>
                                                <Col md={{ size: 8, offset: 2 }} sm="12">
                                                    <Form>
                                                        <FormGroup>
                                                            <Label for="exampleSelect">Select Client Type</Label>
                                                            <ClientT type={this.state.ds} toggle={this.toggle} />

                                                        </FormGroup>
                                                    </Form>
                                                </Col>

                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className="w-100" style={{ display: this.state.ictype }}>
                                <Col xs="12">
                                    <Card body>
                                        <CardTitle>GENERAL</CardTitle>
                                        <CardBody>
                                            <Row>
                                                <Col md={{ size: 8, offset: 2 }} sm="12">
                                                    <Form>
                                                        <Row form>
                                                            <Col md={6}>
                                                                <FormGroup>
                                                                    <Input defaultValue={user.firstname} type="text" name="firstname" id="exampleEmail" onChange={this.change} />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col md={6}>
                                                                <FormGroup>
                                                                    <Input defaultValue={user.lastname} type="text" name="lname" id="examplePassword" onChange={this.change} />
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <FormGroup>
                                                            <Input type="text" name="note" id="note" placeholder="Add note" defaultValue={user.note} onChange={this.change} />
                                                        </FormGroup>


                                                    </Form>
                                                </Col>

                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className="w-100" style={{ display: this.state.cctype }}>
                                <Col xs="12">
                                    <Card body>
                                        <CardTitle>ORGANIZATION INFO</CardTitle>
                                        <CardBody>
                                            <Row>
                                                <Col md={{ size: 8, offset: 2 }} sm="12">
                                                    <Form>
                                                        <FormGroup>
                                                            <Input type="text" name="Ccompanyname" id="Ccompanyname" placeholder="Company Name" defaultValue={user.Ccompanyname} onChange={this.change} />
                                                        </FormGroup>
                                                        <Row form>
                                                            <Col md={6}>
                                                                <FormGroup>
                                                                    <Input type="text" name="firstname" id="exampleEmail" placeholder="Contact Person First Name" defaultValue={user.firstname} onChange={this.change} />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col md={6}>
                                                                <FormGroup>
                                                                    <Input type="text" name="lname" id="examplePassword" placeholder="Contact Person Last Name" defaultValue={user.lastname} onChange={this.change} />
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <FormGroup>
                                                            <Input type="text" name="note" id="note" placeholder="Reg Number" onChange={this.change} defaultValue={user.RegNumber} />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Input type="text" name="note" id="note" placeholder="Tax ID" defaultValue={user.TaxId} onChange={this.change} />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Input type="text" name="note" id="note" placeholder="Website" defaultValue={user.website} onChange={this.change} />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Input type="text" name="note" id="note" placeholder="Add note" defaultValue={user.note} onChange={this.change} />
                                                        </FormGroup>


                                                    </Form>
                                                </Col>

                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className="w-100">
    <Col xs="12">
        <Card body>
                                        <CardTitle>CONTACT ADDRESS</CardTitle>
                                        <CardBody>
                                            <Row form>
                                                <Col>

                                                    <FormGroup>
                                                        <Input type="text" name="address" defaultValue={user.address} id="address" placeholder="Address" onChange={this.change} />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Input type="text" name="city" defaultValue={user.city} id="city" placeholder="City" onChange={this.change} />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Input type="text" name="state" defaultValue={user.state} id="state" placeholder="State" onChange={this.change} />
                                                    </FormGroup>
                                                    <Row form>
                                                        <Col md={6}>
                                                            <FormGroup>
                                                                <Input type="text" name="long" id="exampleCity" placeholder="Longitude" defaultValue={user.long} onChange={this.change} />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md={6}>
                                                            <FormGroup>
                                                                <Input type="text" name="lat" id="exampleState" defaultValue={user.lat} placeholder="Latitude" onChange={this.change} />
                                                            </FormGroup>
                                                        </Col>

                                                    </Row>
                                                </Col>
                                                <Col><div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=NNPC%20towers&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                                </div>
                                                </div></Col>
                                            </Row>
                                        </CardBody>
</Card>
</Col>
</Row>
                            <Row className="w-100">
                                <Col xs="12">
                                    <Card body>
                                        <CardTitle>CONTACT DETAILS</CardTitle>
                                        <CardBody>
                                            <Row form>
                                                <Col>
                                                    <FormGroup>
                                                        <Input type="text" defaultValue={user.phones} name="phones" id="phones" placeholder="Phones" onChange={this.change} />
                                                    </FormGroup>
                                                </Col>
                                                <Col>

                                                    <FormGroup>
                                                        <Input type="text" defaultValue={user.email} onChange={this.change} name="email" id="email" placeholder="Email Address" />
                                                    </FormGroup>

                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className="w-100">
                                <Col xs="12">
                                    <CardBody className="float-right">
                                        <Button outline color="success">CANCEL</Button>{' '}
                                        <Button onClick={this.savechanges} outline color="info">SAVE CHANGES</Button>{' '}
                                    </CardBody>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Row>
        )
    }
}

export default EditClient;