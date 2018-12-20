import React from 'react'
import { Badge, Row, Col, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { UncontrolledCollapse, Button, CardBody, CardHeader, Card } from 'reactstrap';
import { PItemTable, SItemTable } from './PandS'

function PaymentRow(props) {
    const payment = props.payment
    const paymentLink = "#/" + payment.uid + "/payment/" + payment.id

    return (
        <tr key={payment.id.toString()}>
            <td><a href={paymentLink}>{payment.id}</a></td>
            <td>{payment.Method}</td>
            <td>{payment.Amount}</td>
            <td>{payment.Createddate}</td>
        </tr>
    )
}


function PaymentTable(props) {
    const payments = props.payments

    return (
        <Row className="w-100">
            <table className=" bg-white table table-hover table-sm table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">PAYMENT NO</th>
                        <th scope="col">METHOD</th>
                        <th scope="col">AMOUNT</th>
                        <th scope="col">CREATED DATE</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment, index) =>
                        <PaymentRow key={index} payment={payment} />
                    )}
                </tbody>
            </table>
            <Modal isOpen={props.isOpen} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>ADD PAYMENT</ModalHeader>
                <ModalBody>
                    <Form>

                        <FormGroup tag="fieldset">
                            <legend className="small">Add to Invoice</legend>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio1" />{' '}
                                    Invoice A
            </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio1" />{' '}
                                    Invoice B
            </Label>
                            </FormGroup>
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleSelect">Method</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>Check</option>
                                <option>Cash</option>
                                <option>Bank transfer</option>

                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Input type="number" placeholder="Ammount" />
                        </FormGroup>
                        <FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">Currency</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>NAIRA</option>
                                    <option>USD</option>

                                </Input>
                            </FormGroup>
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder="Add note" />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={props.toggle}>Save</Button>{' '}
                    <Button color="secondary" onClick={props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </Row>)
}

function DisplayPayment(props) {
    const payment = props.payment ? props.payment : {}
    const client = props.client ? props.client : {}

    return (
        <Row className="w-100">
            <Row className="w-100">
                <Col>

                    <Card >
                        <CardHeader>
                            <div className="card-header__title">
                                Basic information
                                </div>
                        </CardHeader>
                        <CardBody>
                            <table className="w-100">
                                <tbody>
                                    <tr className="text-primary">
                                        <th>The client</th>
                                        <td>
                                            <a href="/client/255" className="client-avatar">
                                                <span className="" style={{ backgroundColor: "#039be5" }}>
                                                    MC
                                            </span>
                                                <span className="font-weight-bold">
                                                    <span className="">{client.FirstName} {client.LasyName}</span>
                                                    <span className="pl-2">ID: {client.id}</span>
                                                </span>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr><hr /></tr>
                                    <tr>
                                        <th>ID</th>
                                        <td>{payment.id}</td>
                                    </tr>
                                    <tr>
                                        <th>Method</th>
                                        <td>{payment.Method}</td>
                                    </tr>
                                    <tr>
                                        <th>Check number</th>
                                        <td>—</td>
                                    </tr>
                                    <tr>
                                        <th>Created date</th>
                                        <td>{payment.Createddate}</td>
                                    </tr>
                                    <tr>
                                        <th>Amount</th>
                                        <td>
                                            ${payment.Amount}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Sent Receipt</th>
                                        <td>
                                            {payment.Reciept}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </CardBody>
                    </Card>


                </Col>
                <Col>
                    <Card >
                        <CardHeader>
                            <div className="card-header__title">
                                Invoice information
                                </div>
                        </CardHeader>
                        <CardBody>
                            <h3 className="thin">PAYMENT NOT ATTACHED TO ANY INVOICE</h3>
                        </CardBody>
                    </Card>
                </Col>
                <div className="block">
                    <br /></div>
            </Row>

            <Row className="w-100 p-1">

                <Col>
                    <Input type="textarea" placeholder="ADD NOTES" />
                </Col>
            </Row>
        </Row>

    )
}


export { PaymentTable, DisplayPayment }