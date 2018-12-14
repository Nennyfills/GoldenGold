
import React from 'react'
import { UncontrolledCollapse, CardBody, Card } from 'reactstrap';

import { ListGroup, ListGroupItem } from 'reactstrap';






function PItemTable(){
    return(
        
<UncontrolledCollapse toggler="#producttoggler">
    <Card>
        <CardBody> 
            <ListGroup flush>
                <ListGroupItem tag="a">Intel Router</ListGroupItem>
                <ListGroupItem tag="a">Advanced Digital Radio</ListGroupItem>
                <ListGroupItem tag="a">Green Anthena</ListGroupItem>
                <ListGroupItem tag="a">5HP Split Air Condition</ListGroupItem>
            </ListGroup>
        </CardBody>
    </Card>
</UncontrolledCollapse>
)
}


function SItemTable(){
    return(
        
<UncontrolledCollapse toggler="#servicetoggler">
    <Card>
        <CardBody> 
            <ListGroup flush>
                <ListGroupItem tag="a">Advanced unlimited</ListGroupItem>
                <ListGroupItem tag="a">Medium range</ListGroupItem>      
            </ListGroup>
        </CardBody>
    </Card>
</UncontrolledCollapse>
)
}

export {
    PItemTable, SItemTable
}