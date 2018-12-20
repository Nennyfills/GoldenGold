import React, {Component} from 'react'

import {  CardHeader, CardBody, Card } from 'reactstrap';


function TicketList(props){
    var tickets = props.tickets
return(
<div>
    {tickets.map((ticket, index) =>
        <TicketItem key={index} ticket={ticket} />
    )}
    </div>
)
}

function TicketItem(props){
    var ticket = props.ticket
return(
<Card className="w-100">
<CardHeader className="p-3">
    <div>
        <span className="float-left smalller"> <i className="fa fa-user-circle text-primary"></i> {ticket.Author}</span>
        <span className="float-right xx-small">{ticket.Createddate}<i className="fa fa-dot-circle text-primary fa-1x "></i> </span>
    </div>
</CardHeader>
<CardBody className="p-3">
    <div className="ticket-heading">{ticket.Title}</div>
    <span class="ticket-brief">
        {ticket.Brief}</span>
</CardBody></Card>
)
}


export{
    TicketList
}