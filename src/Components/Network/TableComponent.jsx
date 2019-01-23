import React from "react";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./sites/sites.css";

export default props => {
  const {
    tableHeaders,
    tableBody,
    name,
    handleChange,
    rowChecked,
    sortBy
  } = props;
  const tableHeaderKeys = Object.values(tableHeaders); // to map my headers
  const tableBodyKeys = Object.keys(tableHeaders); // to map the body arrays
  let checkedArr = [];
  console.log(checkedArr);

  return (
    <Table {...props} className="mt-2 tables">
      <thead>
        <tr>
          {name && (
            <th>
              <span className="pr-3">NAME</span>{" "}
              <i
                className="fas fa-sort-amount-down "
                onClick={() => sortBy("name")}
              />
            </th>
          )}
          {tableHeaderKeys.map((tableHeader, index) => (
            <th key={index}>{tableHeader}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableBody.map((eachTableBody, index) => (
          <tr key={index}>
            {name && (
              <td>
                <input
                  type="checkbox"
                  name={eachTableBody.id}
                  id=""
                  onChange={() => handleChange(eachTableBody.id)}
                  checked={rowChecked(eachTableBody.id)}
                />
                <span className="pl-3">{eachTableBody.name}</span>
              </td>
            )}
            {tableBodyKeys.map((tableBodyKey, index) => (
              <td key={index}>{eachTableBody[tableBodyKey]}</td>
            ))}
            <td className="tAllButton">
              <Link to={`/admin/sites/${eachTableBody.id}/edit`}>
                <span className="float-right p-0">
                  <i className="fas fa-pen tIcon" />
                  <Button className="tBtn" color="secondary" outline />
                </span>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
