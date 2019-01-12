import React from 'react'
import {  Row, Col, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {  Button, CardBody, CardHeader, Card } from 'reactstrap';
import { PItemTable, SItemTable } from './PandS'

function PaymentRow(props) {
    const payment = props.payment
    const paymentLink = "/admin/" + payment.cid + "/payment/" + payment.id

    return (
        <tr key={payment.id.toString()}>
            <td><a href={paymentLink}>{payment.id}</a></td>
            <td>{payment.method}</td>
            <td>{payment.amount}</td>
            <td>{payment.datetime}</td>
        </tr>
    )
}


function PaymentTable(props) {
    var newpayment = {}
    function creating(e) {
        newpayment[e.target.name] = e.target.value
        console.log(newpayment)
    }
    const payments = props.payments
    const invoices = props.invoices
    console.log(invoices)

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

                            <legend className="small">Add to Invoice</legend>
                            <h6>UNPAID iNVOICES</h6>
                            {invoices.map((invoice, index) =>
                                <FormGroup check>
                                    <Label check><Input type="radio" name="invoiceid" value={invoice.id}  onChange={(e) => creating(e)} /> {invoice.id} -- {invoice.amountdue}</Label>
                                </FormGroup>)
                            }
<hr/>



                        <FormGroup>
                                <Label for="exampleSelect">Method</Label>
                                <Input type="select" name="method" id="exampleSelect" onChange={(e) => creating(e)}>
                                    <option>Select method of payment</option>
                                    <option>Check</option>
                                    <option>Cash</option>
                                    <option>Bank transfer</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Input type="number" placeholder="Ammount" name="amount" onChange={(e) => creating(e)} />
                            </FormGroup>
                            <FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Currency</Label>
                                    <Input type="select" name="currency" id="exampleSelect" onChange={(e) => creating(e)}>
                                        <option>Select currency</option>
                                        <option>NAIRA</option>
                                    </Input>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder="Add note" name="note" onChange={(e) => creating(e)} />
                            </FormGroup>
                    </Form>
                </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => props.save(newpayment)}>Save</Button>{' '}
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
                                                        <span className="">{client.firstname} {client.lastname}</span>
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
                                            <td>{payment.method}</td>
                                        </tr>
                                        <tr>
                                            <th>Check number</th>
                                            <td>—</td>
                                        </tr>
                                        <tr>
                                            <th>Created date</th>
                                            <td>{payment.datetime}</td>
                                        </tr>
                                        <tr>
                                            <th>Amount</th>
                                            <td>
                                                ${payment.amount}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Sent Receipt</th>
                                            <td>
                                                {payment.reciept}
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
        
        
export {PaymentTable, DisplayPayment }