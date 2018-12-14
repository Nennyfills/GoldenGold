import React from 'react'
import { Badge, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import { PItemTable, SItemTable } from './PandSOperations'

function PaymentRow(props) {
    const payment = props.payment
    const paymentLink = "#/" + payment.uid + "/payment/" + payment.id

    return (
        <tr key={payment.id.toString()}>
            <td>{payment.id}</td>
            <td>{payment.Method}</td>
            <td>{payment.Amount}</td>
            <td>{payment.Createddate}</td>
        </tr>
    )
}


function PaymentTable(props) {
    const payments = props.payments

    return (
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
    )
}


export {PaymentTable}