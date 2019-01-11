import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table, Input, Button, ButtonGroup, ButtonToolbar } from 'reactstrap';


export function ClientRow(props) {
  const user = props.user
  const userLink = `/admin/clients/${user.id}`
  const editLink = `/admin/clients/edit/${user.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={user.id.toString()}>
      <th style={{ textAlign: "center" }} scope="row"><a href={userLink}>{user.id}</a></th>
      <td><a href={userLink} className="text-black-50">{user.firstname} {user.lastname}</a></td>
      <td>{user.balance}</td>
      <td>{user.sp}</td>
      <td>{user.Connectedto}</td>
      <td><Badge color={getBadge(user.status)}>{user.status}</Badge></td>
      <td style={{ textAlign: "center" }}><a href={editLink} className="text-black-50"><i className="fa fa-pen-fancy"></i> </a></td>

    </tr>
  )
}
