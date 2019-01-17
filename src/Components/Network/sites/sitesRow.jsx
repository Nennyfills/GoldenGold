import React, { Component } from "react";
import { InputGroupAddon, Input, Button, Table } from "reactstrap";
import { Link } from "react-router-dom";

class SitesRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.checked);

    const { site } = this.props;
    return (
      <tr>
        <td>
          <InputGroupAddon className="" addonType="prepend">
            <span className="pr-2">
              <Input
                className="tInput"
                addon
                type="checkbox"
                name={"child"}
                value={site}
                checked={this.props.checked}
                onChange={() => this.props.handleChange(site.id)}
              />
            </span>
            <Link to={`/view/${site.id}`}>{site.name}</Link>
          </InputGroupAddon>
        </td>
        <td className="tCell">{site.address}</td>
        <td className="tAllButton">
          <Link to={`/${site.id}/edit`}>
            {" "}
            <span className="float-right p-0">
              <i className="fas fa-pen tIcon" />
              <Button className="tBtn" color="secondary" outline />
            </span>
          </Link>
        </td>
      </tr>
    );
  }
}

export default SitesRow;
