import React from "react";
import { siteApi } from "../networkData.jsx";

const Sitelist = () => {
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

            <p> {site.name}</p>
          </InputGroupAddon>
        </td>
        <td className="tCell" />
        <td className="tAllButton">
          <span className="float-right p-0">
            <i className="fas fa-pen tIcon" />
            <Button className="tBtn" color="secondary" outline />
          </span>
        </td>
      </tr>
    </tbody>
  </Table>;
};
