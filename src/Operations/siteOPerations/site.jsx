import React from "react";
import { Badge, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";
import { sitesApi } from "../../networkData";

function SiteRow(props) {
  const sitesApi = props.sitesApi;
  const SiteLink = "#/view/" + sitesApi.id;

  return (
    <tr key={sitesApi.id.toString()}>
      <th scope="row">
        <a href={SiteLink} />
      </th>
      <td>{sitesApi.name}</td>
      <td>{sitesApi.address}</td>
      <td />
    </tr>
  );
}

function SiteTable(props) {
  const sitesApi = props.sitesApi;

  return (
    <Table
      size="sm"
      className=" bg-white Table Table-hover Table-striped Table-bordered"
    >
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col" />
        </tr>
      </thead>
      <tbody>
        {sitesApi.map((sites, index) => (
          <SiteRow key={index} sites={sites} />
        ))}
      </tbody>
    </Table>
  );
}
export { SiteTable, CreateSite, ViewSite };
