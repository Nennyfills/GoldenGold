import React, { Component } from 'react'
import { Card, CardBody, CardTitle, Form, Row, Col, FormGroup, Input, Label, Button } from 'reactstrap'

import { clients } from '../../db'



function ClientT(props) {
    if (props.type == "Individual") {
        console.log(props)
        return (
            <Input type="select" name="select" id="ct" defaultValue="Individual" onChange={props.toggle}>
                <option value="Company" >Company</option>
                <option value="Individual" >Individual</option>

            </Input>)
    } else {
        return (
            <Input type="select" name="select" id="ct" defaultValue="Company" onChange={props.toggle}>
                <option value="Company" >Company</option>
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

        }
        this.toggle = this.toggle.bind(this);

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

    componentDidMount() {


    }

    componentWillMount() {
        const theuser = clients.find(user => user.id.toString() === this.props.match.params.id)

        this.setState({
            user: theuser,
            clientType: theuser.type
        });

        if (theuser.type == "Individual") {
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
    }


    render() {

        return (
            <Row>
                <Row className="w-100 mb-3">
                    <Col xs="12" className="nopcol">
                        <div className="PageHeader  bg-white">
                            <div className="PageHeader-head">
                                <h1>Edit Client -  {this.state.user.FirstName} </h1>
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
                                                                    <Input defaultValue={this.state.user.FirstName} type="text" name="fname" id="exampleEmail" />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col md={6}>
                                                                <FormGroup>
                                                                    <Input defaultValue={this.state.user.LastName} type="text" name="lname" id="examplePassword" />
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
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
                                                        <Input type="text" name="note" defaultValue={this.state.user.houseAddress} id="note" placeholder="House Number" />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Input type="text" name="note" defaultValue={this.state.user.streetAddress} id="note" placeholder="Street Address" />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Input type="text" name="note" defaultValue={this.state.user.city} id="note" placeholder="City" />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Input type="text" name="note" defaultValue={this.state.user.state} id="note" placeholder="State" />
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
                                                <Col><div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=NNPC%20towers&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
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
                                                        <Input type="text" defaultValue={this.state.user.phones} name="note" id="note" placeholder="Phones" />
                                                    </FormGroup>
                                                </Col>
                                                <Col>

                                                    <FormGroup>
                                                        <Input type="text" defaultValue={this.state.user.email} name="note" id="note" placeholder="Email Address" />
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
        <Button outline color="info">SAVE CHANGES</Button>{' '}
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