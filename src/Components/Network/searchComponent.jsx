import React from "react";
import { InputGroup, Form } from "reactstrap";

const SearchComponent = props => {
  const { query, getValue, handleCancel, getSearchedItem } = props;
  return (
    <Form>
      <InputGroup className="inputSearch">
        <input
          className="pl-4 "
          type="text"
          value={query}
          onChange={getValue}
          placeholder="Search"
        />
        <i className="fas fa-search" />
        <p className="remove">
          <i className="fas fa-times" onClick={handleCancel} />
        </p>
        <p className="tick">
          <i className="fas fa-check" onClick={getSearchedItem} />
        </p>
      </InputGroup>
    </Form>
  );
};

export default SearchComponent;
