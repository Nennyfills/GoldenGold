import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Form, Row, Col, FormGroup, Input, Label, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import {valid} from '../../utilities/validate'
import {postRequest} from '../../utilities/apicalls'
import { randomid } from '../../utilities/validate'

class NewClient extends Component {


    constructor(props) {
        super(props);
        this.state = {
            ictype: "none",
            cctype: "none",
            errors:"none"
        };
        this.toggle = this.toggle.bind(this);
        this.submitform = this.submitform.bind(this);
        this.newC = {};
        this.key =""
        randomid(6).then((data)=>{
            this.key= data

            this.newC.key = data
        })
    }

    componentDidMount(){
        randomid(6).then((data)=>{
            this.setState({
                "key":data
            })
            this.key= data
        })
    }


    toggle(e) {

        if (e.target.value == "Individual") {
            this.setState({
                ictype: "block",
                cctype: "none",
            })
            let client = Object.assign({}, this.state.client);    //creating copy of object
            client.type = 'Individual';                        //updating value
            this.setState({ client });
        }

        if (e.target.value == "Company") {
            this.setState({
                cctype: "block",
                ictype: "none",
            })
            let client = Object.assign({}, this.state.client);    //creating copy of object
            client.type = 'Company';                        //updating value
            this.setState({ client });
        }
    }

    change = e => {
        let client = Object.assign({}, this.state.client);
        client[e.target.name] = e.target.value;
        this.newC[e.target.name] = e.target.value;
        this.setState({ client }, () => {
            console.log(this.state)
        });
    }

    submitform() {
        var newclient = this.state.client;
        newclient["status"] = "inactive";
        newclient["balance"] = 0.0;
        newclient["credit"] = 0.0;
        newclient["outstanding"] = 0.0;
        newclient["key"] = this.key;
        if (valid(newclient)) {
            postRequest('http://localhost:3600/api/clients', JSON.stringify(newclient)).then(()=>{ this.setState({
                goback: true
            })}).catch(()=>{})
        } else {
            this.setState({
                errors:"block"
            })
        }
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
        return (

            <Row>
{goal}                <Row className="w-100 mb-3" >
                    <Col xs="12" className="nopcol">
                        <div className="PageHeader  bg-white">
                            <div className="PageHeader-head">
                                <h1> <a href="/admin/Clients"> Clients </a> /
    Add client</h1>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="w-100">
                    <Col xs="12" md={{ size: 10, offset: 1 }}>      <Row className="w-100">
                        <Col>
                            <Row className="w-100" style={{ display: this.state.errors }}>
                                <Col xs="12">
                                    <Card body>
                                        <CardBody>
                                            <Row>
                                                <h6 style={{color:"red", textAlign:"center"}}>VALIDATION FAILED! FILL ALL REQUIRED FIELDS CORRECTLY!!</h6>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
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
                                                            <Input type="select" name="type" id="ct" onChange={this.toggle}>
                                                                <option>Choose One</option>
                                                                <option>Company</option>
                                                                <option>Individual</option>
                                                            </Input>
                                                        </FormGroup>
                                                        <FormGroup>
                                                        <Label for="">Client passcode</Label>

                                                                    <Input type="text" name="key" id="exampleEmail" value={this.key} disabled />
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
                                                                    <Input type="text" name="firstname" id="exampleEmail" onChange={e => this.change(e)} placeholder="First Name" />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col md={6}>
                                                                <FormGroup>
                                                                    <Input type="text" name="lastname" id="examplePassword" onChange={e => this.change(e)} placeholder="Last Name" />
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <FormGroup>
                                                            <Input type="text" name="Inote" id="note" onChange={e => this.change(e)} placeholder="Add note" />
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
                                                            <Input type="text" name="Ccompanyname" id="cname" placeholder="Company Name" onChange={this.change} />
                                                        </FormGroup>
                                                        <Row form>
                                                            <Col md={6}>
                                                                <FormGroup>
                                                                    <Input type="text" name="firstname" id="exampleEmail" placeholder="Contact Person First Name" onChange={this.change} />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col md={6}>
                                                                <FormGroup>
                                                                    <Input type="text" name="lastname" id="examplePassword" placeholder="Contact Person Last Name" onChange={this.change} />
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <FormGroup>
                                                            <Input type="text" name="RegNumber" id="note" placeholder="Reg Number" onChange={this.change} />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Input type="text" name="TaxId" id="note" placeholder="Tax ID" onChange={this.change} />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Input type="text" name="website" id="note" placeholder="Website" onChange={this.change} />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Input type="text" name="note" id="note" placeholder="Add note" onChange={this.change} />
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
                                                        <Input type="text" name="phones" id="note" placeholder="House Number" onChange={this.change} />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Input type="text" name="address" id="note" placeholder="Street Address" onChange={this.change} />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Input type="text" name="city" id="note" placeholder="City" onChange={this.change} />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Input type="text" name="state" id="note" placeholder="State" onChange={this.change} />
                                                    </FormGroup>
                                                    <Row form>
                                                        <Col md={6}>
                                                            <FormGroup>
                                                                <Input type="text" name="long" id="exampleCity" placeholder="Longitude" onChange={this.change} />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md={6}>
                                                            <FormGroup>
                                                                <Input type="text" name="lat" id="exampleState" placeholder="Latitude" onChange={this.change} />
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
                                                        <Input type="text" name="phones" id="note" placeholder="Phones" onChange={this.change} />
                                                    </FormGroup>
                                                </Col>
                                                <Col>

                                                    <FormGroup>
                                                        <Input type="text" name="email" id="note" placeholder="Email Address" onChange={this.change} />
                                                    </FormGroup>

                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className="w-100 mt-2">
                                <Col xs="12">
                                    <Card body>
                                        <CardBody>
                                            <Row form>
                                                <Col>
                                                    <FormGroup>
                                                        <Input className="btn btn-sm btn-dark" type="submit" value="Continue" onClick={this.submitform} />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
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


export default NewClient;