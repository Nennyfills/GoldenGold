import React from 'react'
import { Badge, Row, Col, Form, FormGroup, Label, Input , Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { UncontrolledCollapse, Button, CardBody, CardHeader, Card } from 'reactstrap';
import { PItemTable, SItemTable } from './PandS'

function DocumentRow(props) {
    const document = props.document
    const documentLink = "#/" + document.uid + "/document/" + document.id

    return (
        <tr key={document.id.toString()}>
            <td><a href={documentLink}>{document.id}</a></td>
            <td>{document.Name}</td>
            <td>{document.Type}</td>
            <td>{document.Size}</td>
            <td>{document.Createddate}</td>
        </tr>
    )
}


function DocumentTable(props) {
    const documents = props.documents

    return (
        <Row><table class=" bg-white table table-hover table-sm table-striped table-bordered">
        <thead>
            <tr>
                <th scope="col">NAME</th>
                <th scope="col">TYPE</th>
                <th scope="col">CREATED DATE</th>
                <th scope="col">USER</th>
                <th scope="col">SIZE</th>
            </tr>
        </thead>
        <tbody>
            {documents.map((document, index) =>
                <DocumentRow key={index} doc={document} />
            )}
        </tbody>
    </table><Modal isOpen={props.isOpen} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>ADD PAYMENT</ModalHeader>
                <ModalBody>
                    <Form>
                  
                        <FormGroup>
                            <Input type="file" placeholder="Ammount" />
                        </FormGroup>
                     
                        <FormGroup>
                            <Input placeholder="Add note" />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={props.toggle}>Save</Button>{' '}
                    <Button color="secondary" onClick={props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </Row>
          )
      }
export {DocumentTable}