import React from "react";
// import { Badge, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
// import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
function SitesRow(props) {
  const sitesApi = props.sitesApi;
  // const serviceLink = "#/system/services/" + service.id;
  // const editLink = "#/system/services/" + service.id;
  // const deleteLink = "#/service/delete" + service.id;

  return (
    <tr key={service.id.toString()}>
      {/* <th scope="row"><a href={serviceLink}>{service.id}</a></th>
            <th scope="row"><a href={serviceLink}>{service.Label}</a></th> */}
      <td>{sitesApi.name}</td>
      {/* <td>{service.Price}</td>
            <td>{service.Createddate}</td>
            <td style={{ textAlign: "center" }}><a href={editLink} className="text-black-50"><i className="fa fa-pen-fancy"></i> </a><a href={deleteLink} className="text-black-50"><i className="fa fa-times"></i> </a></td> */}
    </tr>
  );
}
