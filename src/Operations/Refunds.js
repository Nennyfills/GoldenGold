import React from 'react'
import { Badge, Row, Col, Form, FormGroup, Label, Input , Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { UncontrolledCollapse, Button, CardBody, CardHeader, Card } from 'reactstrap';
import { PItemTable, SItemTable } from './PandS'

function RefundRow(props) {
    const refund = props.refund
    const refundLink = "#/" + refund.uid + "/payment/" + refund.id

    return (
        <tr key={refund.id.toString()}>
            <td><a href={refundLink}>{refund.id}</a></td>
            <td>{refund.Method}</td>
            <td>{refund.Amount}</td>
            <td>{refund.Createddate}</td>
        </tr>
    )
}


function RefundTable(props) {
    const refunds = props.refunds

    return (
        <Row><table class=" bg-white table table-hover table-sm table-striped table-bordered">
        <thead>
            <tr>
                <th scope="col">METHOD</th>
                <th scope="col">AMOUNT</th>
                <th scope="col">CREATED DATE</th>
            </tr>
        </thead>
        <tbody>
            {refunds.map((refund, index) =>
                <RefundRow key={index} refund={refund} />
            )}
        </tbody>
    </table><Modal isOpen={props.isOpen} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>ADD PAYMENT</ModalHeader>
                <ModalBody>
                    <Form>
                  
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
        </Row>
          )
      }


      
function DisplayRefund(props) {
    const refund = props.refund ? props.refund :{}
    const client = props.client ? props.client :{}

    return (
        <Row className="w-100">
            <Row className="w-100">
                <Col>

                    <Card >
                        <CardHeader>
                            <div  className="card-header__title">
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
                                                <span className="" style={{backgroundColor: "#039be5"}}>
                                                    MC
                                            </span>
                                                <span className="font-weight-bold">
                                                    <span className="">{client.FirstName} {client.LasyName}</span>
                                                    <span className="pl-2">ID: {client.id}</span>
                                                </span>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr><hr/></tr>
                                    <tr>
                                        <th>ID</th>
                                        <td>{refund.id}</td>
                                    </tr>
                                    <tr>
                                        <th>Method</th>
                                        <td>{refund.Method}</td>
                                    </tr>
                                    <tr>
                                        <th>Check number</th>
                                        <td>—</td>
                                    </tr>
                                    <tr>
                                        <th>Created date</th>
                                        <td>{refund.Createddate}</td>
                                    </tr>
                                    <tr>
                                        <th>Amount</th>
                                        <td>
                                            ${refund.Amount}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Sent Receipt</th>
                                        <td>
                                            {refund.Reciept}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </CardBody>
                    </Card>
             

                </Col>
                
            </Row>

        </Row>

    )
}


      export {RefundTable , DisplayRefund}