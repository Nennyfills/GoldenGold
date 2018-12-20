import React, { Component } from "react";
import { Table, InputGroupAddon, Input, Button } from "reactstrap";

const SitesTable = props => {
  console.log(props);
  const site = props.site;

  return (
    <tr>
      <td>
        <InputGroupAddon className="" addonType="prepend">
          <span className="pr-2">
            <Input className="tInput" addon type="checkbox" />
          </span>
          {site.name}
        </InputGroupAddon>
      </td>
      <td className="tCell">{site.address}</td>
      <td className="tAllButton">
        <span className="float-right p-0">
          <i className="fas fa-pen tIcon" />
          <Button className="tBtn" color="secondary" outline />
        </span>
      </td>
    </tr>
  );
};
// }

export default SitesTable;
