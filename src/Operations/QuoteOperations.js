import React from 'react'
import { Badge, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import { PItemTable, SItemTable } from './PandSOperations'

function QuoteRow(props) {
    const quote = props.quote
    const quoteLink = "#/" + quote.uid + "/quote/" + quote.id

  

    return (
        <tr key={quote.id.toString()}>
            <th scope="row"><a href={quoteLink}>{quote.quoteno}</a></th>
            <td>{quote.Client}</td>
            <td>{quote.Total}</td>
            <td>{quote.Createddate}</td>
        </tr>
    )
}


function QuoteTable(props) {
    const quotes = props.quotes

    return (
        <table className=" bg-white table table-hover table-sm table-striped table-bordered">
            <thead>
                <tr>
                    <th scope="col">QUOTE NO</th>
                    <th scope="col">CLIENT</th>
                    <th scope="col">TOTAL</th>
                    <th scope="col">CREATED DATE</th>
                  
                </tr>
            </thead>
            <tbody>
                {quotes.map((quote, index) =>
                    <QuoteRow key={index} quote={quote} />
                )}
            </tbody>
        </table>
    )
}


function DisplayQuote(props) {
    const quote = props.quote
    var Brief = props.brief

  
    return (
        <Row className="w-100 block">
            <Col>
                <h4 className="thin mb-3">Quote - {quote.id} </h4>

                <p className="n-25">
                    <span className="xx-small" >{quote.Createddate}</span>
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
            <QuoteItemTable items={[1]} />
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

function QuoteItemTable(props) {
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
                    <QuoteItemRow key={index} quote={item} />
                )}
                <QuoteSummary summary = {summary} />
            </tbody>
            <tfoot>
            </tfoot>
        </table>
    )
}

function QuoteItemRow(props) {
    var quote  = props.quote
    return (
        <tr>
            <td className="">{quote.Label}</td>
            <td className="">{quote.Unitprice}</td>
            <td>{quote.Quantity}</td>
            <td className="">${quote.Totalprice}</td>
        </tr>
    )
}

function QuoteSummary(props) {
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
                       
                    </tbody>
                   
                </table>
            </td>
        </tr>
    )
}

function CreateQuote(props) {
    var Brief = props.brief
    var Items = props.items ? props.items:[]; 
    return (
        <Form>
            <Row className="w-100">
                <Col md={6}>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Quote No</Label>
                            <Input className="input-sm" type="text" name="quoteNo" id="quoteNo" placeholder="quote No" />
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
                    <QuoteItemTable items={Items} />
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




export {QuoteTable , DisplayQuote, CreateQuote}
