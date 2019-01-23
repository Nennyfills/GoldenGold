import React, { Component } from "react";
import { Container, Tooltip, Button, Row, Col } from "reactstrap";
import "./sites.css";
import { Link } from "react-router-dom";
import DataSite from "./dataSite";

class Sites extends Component {
  state = {
    tooltipOpen: false,
    tooltipsOpen: false
  };

  toggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  };
  render() {
    return (
      <Container>
        <Row className="w-100">
          <Col xs="12" className="nopcol">
            <div className="box">
              <div className=" pl-4 pt-3">
                Sites
                <Link activestyle={{ color: "black" }} to="/admin/sites/new">
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
              <DataSite />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Sites;
