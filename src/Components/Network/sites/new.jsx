import React from "react";
import {
  Container,
  Row,
  Col,
  Input,
  FormGroup,
  Label,
  Form,
  Button,
  Card
} from "reactstrap";
import { Link } from "react-router-dom";
import "./sites.css";
import Mymap from "../map/map";

const AddSite = () => {
  return (
    <Container>
      <Row>
        <Col xs="12" className="nopcol">
          <div className="box pl-5 pt-3">
            <Link to="/sites" className="float-left">
              <p>Sites</p>
            </Link>
            <span className="float-left pl-1"> / Add sites</span>
          </div>
          <Card className="newCard">
            <div className=" d-flex flex-wrap">
              <div className="">
                <Form className="p-3">
                  <FormGroup row>
                    <Label for="exampleEmail" sm={5}>
                      Name
                      <span className="spanColor">*</span>
                    </Label>
                    <Col sm={7}>
                      <Input
                        type="text"
                        name="name"
                        id="exampleName"
                        bsSize="sm"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="examplePassword" sm={5}>
                      Address
                      <span className="spanColor">*</span>
                    </Label>
                    <Col sm={7} classNAme="">
                      <Input
                        type="text"
                        name="address"
                        id="examplePassword"
                        bsSize="sm"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="examplePassword" sm={5}>
                      GPS latitude
                      <span className="spanColor">*</span>
                    </Label>
                    <Col sm={7} classNAme="">
                      <Input
                        type="text"
                        name="password"
                        id="examplePassword"
                        bsSize="sm"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="examplePassword" sm={5}>
                      GPS longitude
                      <span className="spanColor">*</span>
                    </Label>
                    <Col sm={7} classNAme="">
                      <Input
                        type="text"
                        name="password"
                        id="examplePassword"
                        bsSize="sm"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm={12}>
                      <Button className="myBtn pt-0 mr-3" color="primary">
                        Resovle GPS
                      </Button>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="contactInfo" sm={5}>
                      Contact info
                    </Label>
                    <Col md={7}>
                      <Input
                        type="textarea"
                        name="contactInfo"
                        id="exampleSelect"
                        bsSize="sm"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="contactInfo" sm={5}>
                      Note
                    </Label>
                    <Col sm={7}>
                      <Input
                        type="textarea"
                        name="contactInfo"
                        id="exampleSelect"
                        bsSize="sm"
                      />
                    </Col>
                  </FormGroup>
                </Form>
              </div>
              <div className=" mt-3 mb-3 card map">
                <Mymap />
              </div>
            </div>
          </Card>
          <div className="d-flex float-right cancelandSave">
            <Button
              className="pb-0 pt-0 mr-3"
              bsSize="sm"
              color="danger"
              outline
            >
              CANCEL
            </Button>{" "}
            <Button className="pb-0 pt-0" bsSize="sm" color="primary" outline>
              SAVE
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddSite;
