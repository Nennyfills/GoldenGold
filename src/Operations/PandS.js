
import React from 'react'
import { UncontrolledCollapse, CardBody, Card } from 'reactstrap';

import { ListGroup, ListGroupItem } from 'reactstrap';






function PItemTable(props){
    var products = props.products ? props.products : []
    return(
        
<UncontrolledCollapse toggler="#producttoggler" className="w-100">
    <Card className="bg-transparent p-1 w-100">
        <CardBody className="p-0"> 
            <ListGroup flush className="">
            {products.map((product, index) =>
                        <ListGroupItem className="bg-transparent hand" key={index} tag="a" onClick={() => props.addproduct(product)} >{product.Label}</ListGroupItem>
                    )}
              
            </ListGroup>
        </CardBody>
    </Card>
</UncontrolledCollapse>
)
}


function SItemTable(props){
        var services = props.services ? props.services : []

    return(
        
<UncontrolledCollapse toggler="#servicetoggler" className="w-100">
    <Card className="bg-transparent p-1 w-100">
        <CardBody className="p-0"> 
            <ListGroup flush>
            {services.map((service, index) =>
                            <ListGroupItem className="bg-transparent hand" key={index} tag="a" onClick={() => props.addservice(service)} >{service.Label}</ListGroupItem>
                    )}     
            </ListGroup>
        </CardBody>
    </Card>
</UncontrolledCollapse>
)
}

export {
    PItemTable, SItemTable
}