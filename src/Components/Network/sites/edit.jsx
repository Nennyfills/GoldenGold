import React, { Component } from "react";
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
import { sitesApi } from "./networkData";
import { Link } from "react-router-dom";
import "./sites.css";
import Mymap from "../map/map";
import { axios } from "axios";

class EditSite extends Component {
  state = {
    data: sitesApi,
    name: "",
    address: "",
    gpslat: "",
    gpslon: "",
    contactInfo: "",
    note: ""
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    const data = this.state.data.filter(api => api.id == id)[0];
    // console.log(data);
    this.setState({ data });
  }

  Onsubmit = e => {
    e.preventDefault();
    console.log("clicked");
    this.setState({ name: this.nameInput.value });
  };
  render() {
    const { data, name } = this.state;
    console.log(data, name);
    return (
      <Container>
        <Row>
          <Col xs="12" className="nopcol">
            <div className="box pl-5 pt-2">
              <Link to="/sites" className="float-left">
                <p>Sites</p>
              </Link>
              <span className="float-left pl-1"> / {data.name}</span>
              <span className="float-left pl-1 pr-3"> / Edit</span>
              <Button
                className="pb-0 pt-0 mb-1 "
                color="danger"
                size="sm"
                outline
              >
                <i className="fas fa-trash-alt" />
              </Button>
            </div>
            <Card className="newCard">
              <div className=" d-flex flex-wrap">
                <div className="">
                  <Form className="p-3" onSubmit={this.Onsubmit}>
                    <FormGroup row>
                      <Label for="name" sm={5}>
                        Name
                      </Label>
                      <Col sm={7}>
                        <Input
                          type="text"
                          innerRef={input => (this.name = input)}
                          name="name"
                          defaultValue={data.name}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="exampleAddress" sm={5}>
                        Address
                      </Label>
                      <Col sm={7} classNAme="">
                        <Input
                          type="text"
                          defaultValue={data.address}
                          bsSize="sm"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="exampleLat" sm={5}>
                        GPS latitude
                      </Label>
                      <Col sm={7} classNAme="">
                        <Input
                          type="text"
                          defaultValue={data.lat}
                          name="lat"
                          bsSize="sm"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="exampleLon" sm={5}>
                        GPS longitude
                      </Label>
                      <Col sm={7} classNAme="">
                        <Input
                          type="text"
                          defaultValue={data.lon}
                          name="lon"
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
                        <Input type="textarea" name="contactInfo" bsSize="sm" />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="note" sm={5}>
                        Note
                      </Label>
                      <Col sm={7}>
                        <Input type="textarea" name="note" bsSize="sm" />
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
              <Link to={`/view/${data.id}`}>
                <Button
                  className="pb-0 pt-0 mr-3"
                  bsSize="sm"
                  color="danger"
                  outline
                >
                  CANCEL
                </Button>
              </Link>
              <Button
                className="pb-0 pt-0"
                bsSize="sm"
                color="primary"
                outline
                onClick={e => this.Onsubmit(e)}
              >
                SAVE
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EditSite;
