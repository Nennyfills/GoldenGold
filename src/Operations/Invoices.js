import React from 'react'
import { Badge, Row, Col, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import { PItemTable, SItemTable } from './PandS'

function InvoiceRow(props) {
    const invoice = props.invoice
    const invoiceLink = "/admin/" + invoice.cid + "/invoice/" + invoice.id

    const getBadge = (status) => {
        return status === 'Paid' ? 'success' :
            status === 'Unpaid' ? 'danger' :
                'primary'
    }

    return (
        <tr key={invoice.id.toString()}>
            <th scope="row"><a href={invoiceLink}>{invoice.id}</a></th>
            <td>{invoice.total}</td>
            <td>{invoice.amountdue}</td>
            <td>{invoice.datetime}</td>
            <td>{invoice.datedue}</td>
            <td><Badge color={getBadge(invoice.status)}>{invoice.status}</Badge></td>
        </tr>
    )
}


function InvoiceTable(props) {
    const invoices = props.invoices

    return (
        <Table size="sm" className=" bg-white Table Table-hover Table-striped Table-bordered">
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
        </Table>
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
            <Row className="w-100">
                <Col xs="10">
                    <h4 className="thin ">Invoice - {invoice.id}
                        <label className="xx-small"><Badge color={getBadge(invoice.status)} className="m-1">{invoice.status}</Badge></label> </h4>


                    <p className="n-25">
                        <span className="xx-small" >{invoice.datetime}</span>
                        <span className="pl-3 xx-small">{invoice.datedue}</span>
                    </p>
                </Col>
                <Col xs="2" className="flex-center">                <Button outline color="info" size="sm" className="">ADD PAYMENT</Button>{' '}
                </Col>
            </Row>
            <Row className="w-100 pl-5 pr-5">

                <Table className="">
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
                </Table>
            </Row>
            <Row className="w-100 p-5">
                <hr className="block" />
                <InvoiceItemTableView items={props.invoiceItems} summary={props.summary} />

            </Row>
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
    var currentItems = props.currentItems ? props.currentItems : [];
    var invoice = {}
    function creating(e) {
        invoice[e.target.name] = e.target.value
    }
    return (
        <Row className="w-100">
            <Row className="w-100 mb-3">
                <Col >
                    <Form className="bg-white p-3">
                        <FormGroup>
                            <Label for="exampleEmail">Invoice No</Label>
                            <Input className="input-sm" type="text" name="invoiceNo" id="invoiceNo" disabled value={props.id} placeholder="invoice No" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Day Left </Label>
                            <Input type="number" name="duein" id="days" placeholder="Maturity Date" onChange={(e) => creating(e)} />
                        </FormGroup>
                    </Form>
                </Col>
                <Col>
                    <Row className="w-100 bg-white p-3">
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
            <br />
            <Row className="w-100 mb-3">

                <Col sm="4">
                    <Row className="w-100  bg-white p-3">
                        <Row className="w-100 justify-content-around p-3">
                            <Button outline color="secondary" size="sm" className="btn-sm" id="servicetoggler" > Add New Service</Button>
                            <Button outline color="secondary" size="sm" className="btn-sm" id="producttoggler"> Add New Product</Button>
                        </Row>
                        <Row className="w-100">
                            <SItemTable services={props.services} addservice={(service) => props.addservice(service)} />
                            <PItemTable products={props.products} addproduct={(product) => props.addproduct(product)} />
                        </Row>
                        <Row className="w-100">
                            <h6>ADD CUSTOM PRODUCT</h6>
                            <Input placeholder="Label" />
                            <Input placeholder="Quantity" />
                            <Input placeholder="Unit price" />
                            <Button outline className="float-right" color="primary">ADD</Button>{' '}

                        </Row>
                    </Row>
                </Col>
                <Col sm="8">                <Row className="w-100  bg-white p-3">

                    <InvoiceItemTable items={currentItems} summary={props.summary} qchange={(value, id) => props.qchange(value, id)} />
                </Row>  </Col>
                <br />

            </Row>
            <Row className="w-100">
                <Col className="bg-white p-3">
                    <Input type="textarea" name="note" placeholder="ADD EXTRA NOTE" onChange={(e) => creating(e)} />
                    <br/>
                    <Button outline className="float-right" color="primary" onClick={() => props.save(invoice)}>SAVE</Button>{' '}
                    <Button outline color="secondary" className="float-right">CANCEL</Button>{' '}
                </Col>
            </Row>
        </Row>
    )
}



function InvoiceItemTableView(props) {
    var items = props.items
    var summary = props.summary ? props.summary : {}
    return (
        <Table striped borderless className="" size="sm">
            <thead>
                <tr>
                    <th className="">Label</th>
                    <th className="">Price</th>
                    <th><span className="">Quantity</span>
                    </th><th className=""> Total</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item, index) =>
                    <InvoiceItemRowView key={index} invoice={item} qchange={(value, id) => props.qchange(value, id)} />
                )}

                <InvoiceSummary summary={summary} />
            </tbody>
            <tfoot>
            </tfoot>
        </Table>
    )
}

function InvoiceItemTable(props) {
    var items = props.items
    var summary = props.summary ? props.summary : {}
    return (
        <Table striped borderless className="" size="sm">
            <thead>
                <tr>
                    <th className="">Label</th>
                    <th className="">Price</th>
                    <th><span className="">Quantity</span>
                    </th><th className=""> Total</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item, index) =>
                    <InvoiceItemRow key={index} invoice={item} qchange={(value, id) => props.qchange(value, id)} />
                )}

                <InvoiceSummary summary={summary} />
            </tbody>
            <tfoot>
            </tfoot>
        </Table>
    )
}

function InvoiceItemRow(props) {
    var invoice = props.invoice
    return (
        <tr>
            <td className="">{invoice.label}</td>
            <td className="">{invoice.price}</td>
            <td><input type="number" defaultValue={invoice.quantity} onChange={(e) => props.qchange(e.target.value, invoice.id)} /></td>
            <td className="">${invoice.totalprice}</td>
        </tr>
    )
}

function InvoiceItemRowView(props) {
    var invoice = props.invoice
    return (
        <tr>
            <td className="">{invoice.label}</td>
            <td className="">{invoice.price}</td>
            <td><input type="number" className="border-0" defaultValue={invoice.Quantity} onChange={(e) => props.qchange(e.target.value, invoice.id)} disabled /></td>
            <td className="">${invoice.totalprice}</td>
        </tr>
    )
}

function InvoiceSummary(props) {
    var summary = props.summary
    console.log(summary)
    return (
        <tr>
            <td className="" colSpan="1">
            </td>
            <td className="" colSpan="3">
                <Table bordered className="table">
                    <tbody>
                        <tr>
                            <th>    Subtotal</th>
                            <td className="">${summary.subtotal}</td>
                        </tr>
                    </tbody>
                    <tbody className="">
                        <tr>
                            <th>    Total price </th>
                            <td className="">
                                <strong>${summary.totalprice}</strong>
                            </td>
                        </tr>
                        <tr>
                            <th>    Amount paid </th>
                            <td className="">${summary.ammountpaid}</td>
                        </tr>
                    </tbody>
                    <tbody className="">
                        <tr>
                            <th>    Amount due</th>
                            <td className="">
                                <strong>${summary.amountdue}</strong>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </td>
        </tr>
    )
}



export {
    InvoiceTable, CreateInvoice, DisplayInvoice
}
