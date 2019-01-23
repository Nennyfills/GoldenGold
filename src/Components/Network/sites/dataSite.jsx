import React, { Component } from "react";
import { sitesApi } from "./networkData";
import "./sites.css";
import TableComponent from "../TableComponent";
import SearchComponent from "../searchComponent";
import ModalsNetworkComponent from "../ModalsNetworkComponent";
import {
  Button,
  InputGroupText,
  Input,
  InputGroupAddon,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  ButtonDropdown
} from "reactstrap";

const MyTableHeader = {
  address: "ADDRESS"
};

class DataSite extends Component {
  state = {
    data: sitesApi,
    pignationToggle: false,
    checkedArr: [],
    checked: false,
    query: "",
    direction: {
      name: "asc"
    },
    deleteModal: false
  };

  //dataSite function handler

  deleteModalToggle = () => {
    const { deleteModal } = this.state;
    this.setState({ deleteModal: !deleteModal });
  };

  pignationToggle = () => {
    const { pignationToggleB } = this.state;
    this.setState({
      pignationToggleB: !pignationToggleB
    });
  };

  handleSortBy = key => {
    const { data, direction } = this.state;
    this.setState({
      data: data.sort((a, b) => {
        let firstWord = a[key].trim().toLowerCase();
        let secondWord = b[key].trim().toLowerCase();
        return direction[key] === "asc"
          ? firstWord < secondWord
            ? -1
            : 1
          : firstWord > secondWord
          ? -1
          : 1;
      }),
      direction: { [key]: direction[key] === "asc" ? "desc" : "asc" }
    });
  };

  handleSearch = e => {
    // this.setState({
    //   query: e.target.query
    // });
  };

  handleCancel = () => {
    this.setState({
      query: " "
    });
    console.log("cancel");
  };

  handleDelete = () => {
    this.setState({
      checkedArr: [],
      checked: false
    });
    console.log("click");
  };

  handleRowChange = id => {
    const { checkedArr } = this.state;
    let checked = checkedArr;
    let index = checkedArr.indexOf(id);
    if (index < 0) {
      checked.push(id);
    } else {
      checked.splice(index, 1);
    }
    this.setState({
      checkedArr: checked
    });
    console.log(checkedArr);
  };

  handleChecked = id => {
    return this.state.checkedArr.indexOf(id) !== -1;
  };

  handleAllCheck = () => {
    const { data, checked } = this.state;
    if (checked === true) {
      this.setState({
        checkedArr: [],
        checked: false
      });
    } else {
      let allData = data;
      this.setState({ checkedArr: allData.map(all => all.id), checked: true });
    }
  };

  render() {
    const { data, checked, checkedArr, query } = this.state;

    let filteredData = data.filter(dataValue => {
      return dataValue.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    return (
      <div>
        <div className="pl-3 pr-5">
          <InputGroupAddon className=" float-left" addonType="prepend">
            <InputGroupText className="pt-0 pb-0 mr-2 ">
              <Input
                className=""
                addon
                type="checkbox"
                checked={checked}
                onChange={this.handleAllCheck}
              />
              <span className="pl-2 numberBtn">{checkedArr.length}</span>
            </InputGroupText>
            {checkedArr.length !== 0 ? (
              <div>
                <Button
                  className="pt-0 pb-0"
                  color="danger"
                  outline
                  onClick={this.deleteModalToggle}
                >
                  <i className="fas fa-trash-alt" />
                  Delete
                </Button>
                <ModalsNetworkComponent
                  isOpen={this.state.deleteModal}
                  toggle={this.deleteModalToggle}
                  headerToggle={this.deleteModalToggle}
                  className={this.props.className}
                  handleCancel={this.deleteModalToggle}
                  handleDelete={this.deleteModalToggle}
                  paragraphBody={
                    <div>
                      <h3>Confirm</h3>
                      <p>Do you really want to delete these devices?</p>
                    </div>
                  }
                  paragraphHeaderDelete={<h4>Delete</h4>}
                />
              </div>
            ) : (
              <h1 />
            )}
          </InputGroupAddon>
          <div className="float-right">
            <SearchComponent
              query={query}
              getValue={this.handleSearch}
              handleCancel={this.handleCancel}
              getSearchedItem={this.getSearchedItem}
            />
          </div>
        </div>
        <div className=" pl-3 pr-3">
          <TableComponent
            size="sm"
            responsive
            hover
            borderless
            striped
            sortBy={this.handleSortBy}
            handleChange={this.handleRowChange}
            rowChecked={this.handleChecked}
            name
            tableHeaders={MyTableHeader}
            tableBody={data}
          />
        </div>
        <div className="pl-3">
          <ButtonDropdown
            isOpen={this.state.pignationToggleB}
            toggle={this.pignationToggle}
          >
            <DropdownToggle
              caret
              color="secondary siteFonts dropdownDesign"
              outline
            >
              <span className="pt-0 pb-0">
                {this.state.data.length} of {this.state.data.length}
              </span>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header> showing Item of </DropdownItem>
              <DropdownItem> 1 0f 10</DropdownItem>
              <DropdownItem> 1 0f 20</DropdownItem>
              <DropdownItem> 1 0f 50</DropdownItem>
              <DropdownItem> 1 0f 100</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </div>
      </div>
    );
  }
}

export default DataSite;
