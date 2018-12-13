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
            <td>{quote.Ceateddate}</td>
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
                    <quoteRow key={index} quote={quote} />
                )}
            </tbody>
        </table>
    )
}


export {QuoteTable}
