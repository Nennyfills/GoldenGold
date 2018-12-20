import React, { Component } from "react";
// import { sitesApi } from "../../../networkData.js";

import {
  Container,
  Tooltip,
  InputGroupAddon,
  InputGroup,
  InputGroupText,
  Input,
  Button,
  Row,
  Col,
  Form
} from "reactstrap";
import "./sites.css";
import SitesTable from "./sitesTable";
import { Link } from "react-router-dom";
import DataSite from "./dataSite";
// import DataSite from "./dataSite";

class Sites extends Component {
  state = {
    tooltipOpen: false,
    tooltipsOpen: false
  };
  //   constructor(props) {
  //     super(props);

  toggle = this.toggle.bind(this);

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }
  render() {
    return (
      <Container>
        <Row className="w-100">
          <Col xs="12" className="nopcol">
            <div className="box">
              <div className=" pl-4 pt-3">
                Sites{" "}
                <Link activestyle={{ color: "black" }} to="sites/new">
                  <span className="pl-3">
                    <Button
                      color="info"
                      outline
                      className="pl-4 pr-4 pb-0 pt-0 "
                      id={"Tooltip-" + this.props.id}
                    >
                      <i className="fas fa-plus" />
                    </Button>
                    <Tooltip
                      //   placement={this.props.item.placement}
                      isOpen={this.state.tooltipOpen}
                      target={"Tooltip-" + this.props.id}
                      toggle={this.toggle}
                    >
                      Add Sites
                    </Tooltip>
                  </span>
                </Link>
              </div>
            </div>
            <div className="p-3">
              <div className=" float-right mr-4">
                {" "}
                <Form>
                  <InputGroup className="inputSearch">
                    {" "}
                    <input className="pl-4 " type="text" placeholder="Search" />
                    <i className="fas fa-search" />
                    <p className="remove">
                      <i className="fas fa-times" />
                    </p>
                    <p className="tick">
                      <i className="fas fa-check" />
                    </p>
                  </InputGroup>
                </Form>
              </div>
              <div>
                <InputGroupAddon className=" float-left" addonType="prepend">
                  <InputGroupText className="pt-0 pb-0 mr-2 ">
                    <Input className="" addon type="checkbox" />
                    <span className="pl-2 numberBtn">0</span>
                  </InputGroupText>
                  <Button className="pt-0 pb-0" color="danger" outline>
                    <i className="fas fa-trash-alt" /> Delete
                    {/* onClick=
                    {() => this.props.onDelete(this.props.site.id)} */}
                  </Button>
                </InputGroupAddon>
              </div>

              <DataSite />
              <div>
                <Button className="numberBtn" color="light">
                  <span className="pr-2">0</span>of
                  <span className="pl-2">0</span>{" "}
                  <i className="fas fa-sort-down" />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Sites;
