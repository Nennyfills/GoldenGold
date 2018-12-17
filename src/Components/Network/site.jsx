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
              color="primary"
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
              <span className="pl-2">0</span>
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

          <Table hover bordered className="mt-4 ">
            <thead className="tHead m-5">
              <tr>
                <th>
                  Name <i class="fas fa-sort-down" />{" "}
                </th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody className="tBody">
              <tr>
                <td>
                  {" "}
                  <span className="tName">
                    <InputGroupAddon className="tInput" addonType="prepend">
                      <Input className="" addon type="checkbox" />
                      <span className="pl-2"> Mark </span>
                    </InputGroupAddon>
                  </span>
                </td>
                <td className="tCell">
                  <span className="addressSpan ">Otto </span>
                  <span className="buttonSpan">
                    <button>
                      <i className="fas fa-pen " />
                    </button>
                  </span>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Site;
