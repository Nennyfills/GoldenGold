import React from 'react'
import { Badge, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
function ProductRow(props) {
    const product = props.product
    const productLink = "#/system/products/" + product.id
    const editLink = "#/system/products/" + product.id
    const deleteLink = "#/product/delete" + product.id

   

    return (
        <tr key={product.id.toString()}>
            <th scope="row"><a href={productLink}>{product.id}</a></th>
            <th scope="row"><a href={productLink}>{product.Label}</a></th>
            <td>{product.Description}</td>
            <td>{product.Price}</td>
            <td>{product.Createddate}</td>
            <td style={{ textAlign: "center" }}><a href={editLink} className="text-black-50"><i className="fa fa-pen-fancy"></i> </a><a href={deleteLink} className="text-black-50"><i className="fa fa-times"></i> </a></td>
        </tr>
    )
}


function ProductTable(props) {
    const products = props.products

    return (
        <table className=" bg-white table table-hover table-sm table-striped table-bordered">
            <thead>
                <tr>
                    <th scope="col">PRODUCT ID</th>
                    <th scope="col">LABEL</th>
                    <th scope="col">DESCRIPTION</th>
                    <th scope="col">PRICE</th>
                    <th scope="col">CREATED DATE</th>
                    <th scope="col">STATUS</th>
                </tr>
            </thead>
            <tbody>

                {products.map((product, index) =>
                    <ProductRow key={index} product={product} />
                )}
            </tbody>
        </table>
    )
}


function DisplayProduct(props) {
    const product = props.product
    return(
        <Row className="w-100 bg-white p-3 justify-content-center ">
        <Form className="w-75">
            <FormGroup>
          <Label for="exampleEmail">Label</Label>
          <Input type="label" name="label" id="label" defaultValue={product.Label} />
        </FormGroup>

         <FormGroup>
          <Label for="exampleEmail">Description</Label>
          <Input type="description" name="description" id="description" defaultValue={product.Description} />
        </FormGroup>

         <FormGroup>
          <Label for="exampleEmail">Price</Label>
          <Input type="email" name="email" id="exampleEmail" defaultValue={product.Price} />
        </FormGroup>

         <FormGroup>
          <Label for="exampleEmail">ADD NOTE</Label>
          <Input type="textarea" name="email" id="exampleEmail" defaultValue={product.note} />
        </FormGroup>

         <FormGroup className="float-right">

        <Button outline color="warning">CANCEL</Button>{' '}
        <Button outline color="primary">SAVE CHANGES</Button>
        </FormGroup>

            </Form>
        </Row>
    )
}



function CreateProduct(props) {
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


export {ProductTable, DisplayProduct, CreateProduct}