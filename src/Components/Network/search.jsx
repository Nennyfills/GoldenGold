import React, { Component } from "react";
import { Form, InputGroup } from "reactstrap";
import { sitesApi } from "../../networkData.js";

class Search extends Component {
  state = {};
  render() {
    return (
      <div>
        <Form>
          <InputGroup className="inputSearch pb-2">
            {" "}
            <input className="pl-4 " type="text" placeholder="Search" />
            <i className="fas fa-search" />
            <p className="remove">
              <i className="fas fa-times" />
            </p>
            <p className="tick">
              <i className="fas fa-check" />
            </p>
          </InputGroup>
        </Form>
      </div>
    );
  }
}

export default Search;
