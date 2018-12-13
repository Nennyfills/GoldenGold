import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap'
class Balance extends Component {

    render() {
        return (
            <Card>
                <CardBody>
                    <table class="account-standings account-standings-balance">
                        <tbody><tr>
                            <td data-tooltip="Client's current account balance. Sum of credit and outstanding">
                                <span class="account-standings__label">Account balance</span>
                                <strong>$0.00</strong>
                            </td>
                            <td data-tooltip="Available funds. Sum of client's overpayments and payments not linked to any invoice">
                                <span class="account-standings__label">Credit</span>
                                $0.00
                </td>
                            <td data-tooltip="Total amount owed by client">
                                <span class="account-standings__label">Outstanding</span>
                                <span>$0.00</span>
                            </td>
                        </tr>
                        </tbody></table>
                </CardBody>
            </Card>
        )
    }
}

export default Balance