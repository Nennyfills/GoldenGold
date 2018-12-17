import React, { Component } from "react";
import {
  Table,
  Tooltip,
  InputGroupAddon,
  InputGroup,
  InputGroupText,
  Input,
  Button
} from "reactstrap";
import "./site.css";

class Site extends Component {
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
      <div className="container box">
        <h3 className=" pl-4 pt-3">
          Sites{" "}
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
        </h3>
        <div className="p-5">
          <InputGroupAddon className="" addonType="prepend">
            <InputGroupText className="pt-0 pb-0 mr-2">
              <Input className="" addon type="checkbox" />
              <span className="pl-2 numberBtn">0</span>
            </InputGroupText>
            <Button className="pt-0 pb-0" color="danger" outline>
              {" "}
              <i className="fas fa-trash-alt" /> Delete
            </Button>
            <InputGroup className="inputSearch">
              {" "}
              <input className="pl-5" type="text" placeholder="Search" />
              <i className="fas fa-search" />
            </InputGroup>
            <p className="remove">
              <i className="fas fa-times" />
            </p>
            <p className="tick">
              <i className="fas fa-check" />
            </p>
          </InputGroupAddon>

          <Table hover striped size="sm" className="mt-4 ">
            <thead className="tHead m-5">
              <tr className="tHead">
                <th>
                  NAME <i class="fas fa-sort-down" />{" "}
                </th>
                <th>ADDRESS</th>
                <th />
              </tr>
            </thead>
            <tbody className="tBody">
              <tr>
                <td>
                  {" "}
                  <InputGroupAddon className="" addonType="prepend">
                    <span className="pr-2">
                      <Input className="tInput" addon type="checkbox" />
                    </span>
                    Mark
                  </InputGroupAddon>
                </td>
                <td className="tCell">
                  <span bordered className="addressSpan ">
                    Otto{" "}
                  </span>
                </td>
                <td className="tAllButton">
                  <span className="float-right p-0">
                    <i className="fas fa-pen tIcon" />
                    <Button className="tBtn" color="secondary" outline />
                  </span>
                </td>
              </tr>
            </tbody>
          </Table>
          <div>
            <Button className="numberBtn" color="light">
              <span className="pr-2">0</span>of<span className="pl-2">0</span>{" "}
              <i class="fas fa-sort-down" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Site;
