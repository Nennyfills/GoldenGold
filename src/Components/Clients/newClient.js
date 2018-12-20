import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Form, Row, Col, FormGroup, Input, Label, Button } from 'reactstrap'
import {Redirect} from 'react-router-dom'


class NewClient extends Component {


    constructor(props) {
        super(props);
        this.state = {
            ictype: "none",
            cctype: "none"
            ,client:{}
        };
        this.toggle = this.toggle.bind(this);
        this.submitform = this.submitform.bind(this);
        this.newC = {};

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

    change = e =>{
        this.newC[e.target.name] = e.target.value;

        this.setState({
            client :this.newC
        })
        console.log(this.state)
    }
    submitform(client){
        //postOnlineWithFetch()
        this.setState({
           goback:true
        })
    }

    render() {
        var goal;
        
        if(this.state.goback ==  true){
            goal =       <Redirect
                 to= "/Clients"
                 
               />
             }else{
                 goal=<hr></hr>
             }
        return (
            
            <Row>
                {goal}
                <Row className="w-100 mb-3" >
                    <Col xs="12" className="nopcol">
                        <div className="PageHeader  bg-white">
                            <div className="PageHeader-head">
                                <h1> <a href="/#Clients"> Clients </a> /
    Add client</h1> 
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
                                                            <Input type="select" name="select" id="ct" onChange={this.toggle}>
                                                                <option selected disabled>Choose One</option>
                                                                <option>Company</option>
                                                                <option>Individual</option>
                                                            </Input>
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
                                                                    <Input type="text" name="fname" id="exampleEmail"  onChange={e => this.change(e)} placeholder="First Name" />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col md={6}>
                                                                <FormGroup>
                                                                    <Input type="text" name="lname" id="examplePassword"  onChange={e => this.change(e)} placeholder="Last Name" />
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <FormGroup>
                                                            <Input type="text" name="note" id="note"  onChange={e => this.change(e)} placeholder="Add note" />
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
                                                            <Input type="text" name="cname" id="cname" placeholder="Company Name" />
                                                        </FormGroup>
                                                        <Row form>
                                                            <Col md={6}>
                                                                <FormGroup>
                                                                    <Input type="text" name="fname" id="exampleEmail" placeholder="Contact Person First Name" />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col md={6}>
                                                                <FormGroup>
                                                                    <Input type="text" name="lname" id="examplePassword" placeholder="Contact Person Last Name" />
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <FormGroup>
                                                            <Input type="text" name="note" id="note" placeholder="Reg Number" />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Input type="text" name="note" id="note" placeholder="Tax ID" />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Input type="text" name="note" id="note" placeholder="Website" />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Input type="text" name="note" id="note" placeholder="Add note" />
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
                                                        <Input type="text" name="note" id="note" placeholder="House Number" />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Input type="text" name="note" id="note" placeholder="Street Address" />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Input type="text" name="note" id="note" placeholder="City" />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Input type="text" name="note" id="note" placeholder="State" />
                                                    </FormGroup>
                                                    <Row form>
                                                        <Col md={6}>
                                                            <FormGroup>
                                                                <Input type="text" name="city" id="exampleCity" placeholder="Longitude" />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md={6}>
                                                            <FormGroup>
                                                                <Input type="text" name="state" id="exampleState" placeholder="Latitude" />
                                                            </FormGroup>
                                                        </Col>

                                                    </Row>
                                                </Col>
                                                <Col><div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=NNPC%20towers&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
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
                                                        <Input type="text" name="note" id="note" placeholder="Phones" />
                                                    </FormGroup>
                                                </Col>
                                                <Col>

                                                    <FormGroup>
                                                        <Input type="text" name="note" id="note" placeholder="Email Address" />
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