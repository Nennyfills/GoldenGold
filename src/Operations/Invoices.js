import React from 'react'
import { Badge, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import { PItemTable, SItemTable } from './PandS'

function InvoiceRow(props) {
    const invoice = props.invoice
    const invoiceLink = "#/" + invoice.uid + "/invoice/" + invoice.id

    const getBadge = (status) => {
        return status === 'Paid' ? 'success' :
            status === 'Unpaid' ? 'danger' :
                'primary'
    }

    return (
        <tr key={invoice.id.toString()}>
            <th scope="row"><a href={invoiceLink}>{invoice.Invoiceno}</a></th>
            <td>{invoice.Total}</td>
            <td>{invoice.Amountdue}</td>
            <td>{invoice.Createddate}</td>
            <td>{invoice.Datedue}</td>
            <td><Badge color={getBadge(invoice.Status)}>{invoice.Status}</Badge></td>
        </tr>
    )
}


function InvoiceTable(props) {
    const invoices = props.invoices

    return (
        <table className=" bg-white table table-hover table-sm table-striped table-bordered">
            <thead>
                <tr>
                    <th scope="col">INVOICE NO</th>
                    <th scope="col">TOTAL</th>
                    <th scope="col">AMOUNT DUE</th>
                    <th scope="col">CREATED DATE</th>
                    <th scope="col">DUE DATE</th>
                    <th scope="col">STATUS</th>
                </tr>
            </thead>
            <tbody>
                {invoices.map((invoice, index) =>
                    <InvoiceRow key={index} invoice={invoice} />
                )}
            </tbody>
        </table>
    )
}


function DisplayInvoice(props) {
    const invoice = props.invoice
    var Brief = props.brief

    const getBadge = (status) => {
        return status === 'Paid' ? 'success' :
            status === 'Unpaid' ? 'danger' :
                'primary'
    }
    return (
        <Row className="w-100 block">
            <Col>
                <h4 className="thin ">Invoice - {invoice.id}
                    <label className="xx-small"><Badge color={getBadge(invoice.Status)} className="m-1">{invoice.Status}</Badge></label> </h4>


                <p className="n-25">
                    <span className="xx-small" >{invoice.Createddate}</span>
                    <span className="pl-3 xx-small">{invoice.Duedate}</span>
                </p>
            </Col>

            <table className="table">
                <tbody>
                    <tr>
                        <td>Sender</td>
                        <td>
                            UBNT ISP
        427 West 12800 South <br />
                            Draper UT  84020 <br />
                            United States</td>
                        <td>Recipients</td>
                        <td>                                {Brief}
                        </td>
                    </tr>
                </tbody>
            </table>
            <InvoiceItemTable items={[1]} />
            <hr />
            <Row className=" p-3">
                <div>
                    <Button color="default" id="toggler" style={{ marginBottom: '1rem' }}>
                        VIEW PDF
    </Button>
                    <UncontrolledCollapse toggler="#toggler">
                        <Card>
                            <CardBody>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                                similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                                dignissimos esse fuga! Minus, alias.
        </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                </div>
            </Row>
        </Row>

    )
}



function CreateInvoice(props) {
    var Brief = props.brief
    var Items = props.items ? props.items:[]; 
    return (
        <Form>
            <Row className="w-100">
                <Col md={6}>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Invoice No</Label>
                            <Input className="input-sm" type="text" name="invoiceNo" id="invoiceNo" placeholder="invoice No" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Day Left </Label>
                            <Input type="number" name="number" id="days" placeholder="Maturity Date" />
                        </FormGroup>
                    </Form>
                </Col>
                <Col md={6}>
                    <Row className="w-100">
                        <Col md={6} className="small">
                            <p>Your Profile</p>
                            UBNT ISP
                            427 West 12800 South
                                        Draper UT  84020
                            United States
                        </Col>
                        <Col md={6}>
                            <div>
                                <h6>Client</h6>
                                {Brief}
                            </div>
                        </Col>
                    </Row>

                </Col>
            </Row>
            <br/>
            <Row className="w-100">

                <Col sm="4" className="p-2" style={{backgroundColor:"#eeeeee"}}>
                    <Row className="w-100">
                        <Button color="default" className="btn-sm" id="servicetoggler" style={{ marginBottom: '1rem' }}> Add New Service</Button>
                        <SItemTable />
                    </Row>
                    <Row className="w-100">
                        <Button color="default" className="btn-sm" id="producttoggler" style={{ marginBottom: '1rem' }}> Add New Product</Button>
                        <PItemTable />
                    </Row>
                    <Row className="w-100">
                    <h6>ADD CUSTOM PRODUCT</h6>
                    <Input placeholder="Label" />
                    <Input placeholder="Quantity" />
                    <Input placeholder="Unit price" />
                    <Button outline className="float-right" color="primary">ADD</Button>{' '}

                    </Row>
                </Col>
                <Col sm="8" className="" style={{backgroundColor:"#e0e0e0"}}>
                    <InvoiceItemTable items={Items} />
                </Col>
                <br />
            
            </Row>
            <Row className="w-100 bg-light p-1">
                    <Input type="textarea" placeholder="ADD EXTRA NOTE" />
                </Row>

                   <Row className="w-100 row-reverse  p-2">
                   <Button outline className="float-right" color="primary">SAVE</Button>{' '}
        <Button outline color="secondary"  className="float-right">CANCEL</Button>{' '}
                </Row>
        </Form>
    )
}



function InvoiceItemTable(props) {
    var items = props.items
    var summary = props.summary ? props.summary : {} 
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="">Label</th>
                    <th className="">Price</th>
                    <th><span className="">Quantity</span> <span className="">Qty</span>
                    </th><th className=""> Total</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item, index) =>
                    <InvoiceItemRow key={index} invoice={item} />
                )}
                <InvoiceSummary summary = {summary} />
            </tbody>
            <tfoot>
            </tfoot>
        </table>
    )
}

function InvoiceItemRow(props) {
    var invoice  = props.invoice
    return (
        <tr>
            <td className="">{invoice.Label}</td>
            <td className="">{invoice.Unitprice}</td>
            <td>{invoice.Quantity}</td>
            <td className="">${invoice.Totalprice}</td>
        </tr>
    )
}

function InvoiceSummary(props) {
    var summary = props.summary
    return (
        <tr>
            <td className="" colspan="1">
            </td>
            <td className="" colspan="3">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>    Subtotal</th>
                            <td className="">${summary.Subtotal}</td>
                        </tr>
                    </tbody>
                    <tbody className="">
                        <tr>
                            <th>    Total price </th>
                            <td className="">
                                <strong>${summary.Totalprice}</strong>
                            </td>
                        </tr>
                        <tr>
                            <th>    Amount paid </th>
                            <td className="">${summary.Ammountpaid}</td>
                        </tr>
                    </tbody>
                    <tbody className="">
                        <tr>
                            <th>    Amount due</th>
                            <td className="">
                                <strong>${summary.Amountdue}</strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    )
}



export {
    InvoiceTable, CreateInvoice, DisplayInvoice
}
