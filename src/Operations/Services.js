import React from 'react'
import { Badge, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
function ServiceRow(props) {
    const service = props.service
    const serviceLink = "#/system/services/" + service.id
    const editLink =  "#/system/services/" + service.id
    const deleteLink = "#/service/delete" + service.id

   

    return (
        <tr key={service.id.toString()}>
            <th scope="row"><a href={serviceLink}>{service.id}</a></th>
            <th scope="row"><a href={serviceLink}>{service.Label}</a></th>
            <td>{service.Description}</td>
            <td>{service.Price}</td>
            <td>{service.Createddate}</td>
            <td style={{ textAlign: "center" }}><a href={editLink} className="text-black-50"><i className="fa fa-pen-fancy"></i> </a><a href={deleteLink} className="text-black-50"><i className="fa fa-times"></i> </a></td>
        </tr>
    )
}


function ServiceTable(props) {
    const services = props.services

    return (
        <table className=" bg-white table table-hover table-sm table-striped table-bordered">
            <thead>
                <tr>
                    <th scope="col">service ID</th>
                    <th scope="col">LABEL</th>
                    <th scope="col">DESCRIPTION</th>
                    <th scope="col">PRICE</th>
                    <th scope="col">CREATED DATE</th>
                    <th scope="col">STATUS</th>
                </tr>
            </thead>
            <tbody>
                
                {services.map((service, index) =>
                    <ServiceRow key={index} service={service} />
                )}
            </tbody>
        </table>
    )
}

function DisplayService(props) {
    const service = props.service
    return(
        <Row className="w-100 bg-white p-3 justify-content-center ">
        <Form className="w-75">
            <FormGroup>
          <Label for="exampleEmail">Label</Label>
          <Input type="label" name="label" id="label" defaultValue={service.Label} />
        </FormGroup>

         <FormGroup>
          <Label for="exampleEmail">Description</Label>
          <Input type="description" name="description" id="description" defaultValue={service.Description} />
        </FormGroup>

         <FormGroup>
          <Label for="exampleEmail">Price</Label>
          <Input type="email" name="email" id="exampleEmail" defaultValue={service.Price} />
        </FormGroup>

         <FormGroup>
          <Label for="exampleEmail">ADD NOTE</Label>
          <Input type="textarea" name="email" id="exampleEmail" defaultValue={service.note} />
        </FormGroup>

         <FormGroup className="float-right">

        <Button outline color="warning">CANCEL</Button>{' '}
        <Button outline color="primary">SAVE CHANGES</Button>
        </FormGroup>

            </Form>
        </Row>
    )
}



function CreateService(props) {
    return(
        <Row className="w-100 bg-white p-3 justify-content-center ">
            <Form className="w-75">
            <FormGroup>
          <Label for="exampleEmail">Label</Label>
          <Input type="label" name="label" id="label" placeholder="Label" />
        </FormGroup>

         <FormGroup>
          <Label for="exampleEmail">Description</Label>
          <Input type="description" name="description" id="description" placeholder="Description" />
        </FormGroup>

         <FormGroup>
          <Label for="exampleEmail">Price</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Price" />
        </FormGroup>

         <FormGroup>
          <Label for="exampleEmail">ADD NOTE</Label>
          <Input type="textarea" name="email" id="exampleEmail" placeholder="Note" />
        </FormGroup>

         <FormGroup className="float-right">

        <Button outline color="warning">CANCEL</Button>{' '}
        <Button outline color="primary">SAVE</Button>
        </FormGroup>

            </Form>
        </Row>
    )
}

export {ServiceTable , DisplayService, CreateService}