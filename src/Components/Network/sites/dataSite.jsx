import React, { Component } from "react";
import { sitesApi } from "../../../networkData.js";
import SitesTable from "./sitesTable";
import { Table } from "reactstrap";

const DataSite = props => {
  return (
    <Table hover size="sm" className="mt-5 table">
      <thead className="tHead m-5">
        <tr className="tHead">
          <th>
            NAME <i className="fas fa-sort-down" />{" "}
          </th>
          <th>ADDRESS</th>
          <th />
        </tr>
      </thead>
      <tbody className="tBody">
        {sitesApi.map((site, index) => (
          <SitesTable key={index} site={site} />
        ))}
      </tbody>
    </Table>
  );
};

export default DataSite;
