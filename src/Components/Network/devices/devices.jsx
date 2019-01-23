import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Button,
  InputGroupText,
  InputGroupAddon,
  Input,
  Form,
  Label,
  FormGroup,
  CustomInput
} from "reactstrap";
import "./devices.css";
import { Link } from "react-dom";
import TableComponent from "../TableComponent";
import SearchComponent from "../searchComponent";
import { deviceAPi } from "../sites/networkData";
import { searchBy } from "../../../Controller/controller";
import ModalsNetworkComponent from "../ModalsNetworkComponent";

const MyTableHeader = {
  modelName: "MODEL NAME",
  vendor: "VENDOR",
  site: "SITE"
};

class Devices extends Component {
  state = {
    deviceDropdown: false,
    pignationToggleB: false,
    data: deviceAPi,
    checkedArr: [],
    query: "god",
    checked: false,
    deleteModal: false,
    addQuickDevice: false,
    addDevice: false,
    direction: {
      name: "asc"
    }
  };

  addQuickDeviceToggle = () => {
    const { addQuickDevice } = this.state;
    this.setState({
      addQuickDevice: !addQuickDevice
    });
  };
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
  addDropdownToggle = () => {
    const { deviceDropdown } = this.state;
    this.setState({
      deviceDropdown: !deviceDropdown
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
  handleRowChange = id => {
    const { checkedArr } = this.state;
    let arr = checkedArr;
    let index = checkedArr.indexOf(id);
    if (index < 0) {
      arr.push(id);
    } else {
      arr.splice(index, 1);
    }
    this.setState({ checkedArr: arr });
    console.log("clicked");
  };
  handleAllCheck = () => {
    const { checked, data } = this.state;
    if (checked === true) {
      this.setState({
        checkedArr: [],
        checked: false
      });
    } else {
      const all = data;
      this.setState({
        checkedArr: all.map(allValue => allValue.id),
        checked: true
      });
    }
  };

  handleChecked = id => {
    return this.state.checkedArr.indexOf(id) !== -1;
  };
  // handling Search functions
  getValue = e => {
    // this.setState({
    //   query: e.target.query
    // });
  };

  handleCancel = e => {
    this.setState({
      query: ""
    });
  };

  render() {
    const { data, checkedArr, query, checked } = this.state;
    let filteredData = data.filter(dataValue => {
      return dataValue.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    return (
      <Container>
        <Row>
          <Col xs="12" className="nopcol">
            <div className="box">
              <div className=" pl-4 pt-2">
                <span className="mr-3 ">Devices</span>
                <ButtonDropdown
                  isOpen={this.state.deviceDropdown}
                  toggle={this.addDropdownToggle}
                >
                  <DropdownToggle caret color="primary dropDownDesign" outline>
                    <span className="pt-0 pb-0">
                      <i class="fas fa-plus pl-2 pr-2 " />
                      <i class="fas fa-angle-down pr-1" />
                    </span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={this.addQuickDeviceToggle}>
                      + Quick device
                    </DropdownItem>
                    <ModalsNetworkComponent
                      isOpen={this.state.addQuickDevice}
                      toggle={this.addQuickDeviceToggle}
                      headerToggle={this.addQuickDeviceToggle}
                      paragraphHeaderAddDevice={<h4>Quick add device</h4>}
                      className={this.props.className}
                      handleCancel={this.addQuickDeviceToggle}
                      handleSave={this.addQuickDeviceToggle}
                      bodyForm={
                        <div>
                          <p>
                            Provide basic device attributes. ISM will
                            automatically download all other possible
                            information such as interfaces and IPs. Note it may
                            take a while for synchronization to take effect.{" "}
                          </p>

                          <Form>
                            <FormGroup row>
                              <Label sm={4}>
                                Name{" "}
                                <span className="formAddQuickDevice pl-1">
                                  *
                                </span>
                              </Label>
                              <Col sm={8}>
                                <Input type="text" name="name" />
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Label sm={4}>
                                Vendor{" "}
                                <span className="formAddQuickDevice pl-1">
                                  *
                                </span>
                              </Label>
                              <Col sm={8}>
                                <Input type="select" name="vendor">
                                  <option value="">44</option>
                                </Input>
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Label sm={4}>
                                Site{" "}
                                <span className="formAddQuickDevice pl-1">
                                  *
                                </span>
                              </Label>
                              <Col sm={8}>
                                <Input type="select" name="site">
                                  {/* <option value="">{data}</option> */}
                                </Input>
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Label sm={4}>
                                Username{" "}
                                <span className="formAddQuickDevice pl-1">
                                  *
                                </span>
                              </Label>
                              <Col sm={8}>
                                <Input type="text" name="username" />
                              </Col>
                            </FormGroup>

                            <FormGroup row>
                              <Label sm={4}>Password </Label>
                              <Col sm={8}>
                                <Input
                                  type="password"
                                  name="password"
                                  placeholder="password please"
                                />
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Label sm={4}>
                                IP Adress{" "}
                                <span className="formAddQuickDevice pl-1">
                                  *
                                </span>
                              </Label>
                              <Col sm={8}>
                                <Input type="text" name="ip_adress" />
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Label sm={4}>
                                {" "}
                                SSH Port{" "}
                                <span className="formAddQuickDevice pl-1">
                                  *
                                </span>
                              </Label>
                              <Col sm={8}>
                                <CustomInput type="select" name="ssh-port">
                                  <option value="">22</option>
                                </CustomInput>
                              </Col>
                            </FormGroup>
                          </Form>
                        </div>
                      }
                    />
                    <DropdownItem>+ Device</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </div>
            </div>
            <div className=" ml-4 mr-5 mt-3">
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
                    <span className="pr-2">
                      <Button
                        className="pt-0 pb-0"
                        color="secondary"
                        outline
                        onClick={""}
                      >
                        <i className="fas fa-sync pr-2" />
                        SYNC
                      </Button>
                    </span>
                    <Button
                      className="pt-0 pb-0"
                      color="danger"
                      outline
                      onClick={this.deleteModalToggle}
                    >
                      <i className="fas fa-trash-alt pr-1" />
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
                  getValue={this.getValue}
                  handleCancel={this.handleCancel}
                  getSearchedItem={""}
                />
              </div>
            </div>
            <div className="ml-4 mr-4 mt-2">
              <TableComponent
                size="sm"
                responsive
                hover
                borderless
                sortBy={this.handleSortBy}
                striped
                rowChecked={this.handleChecked}
                handleChange={this.handleRowChange}
                name
                tableHeaders={MyTableHeader}
                tableBody={data}
              />
            </div>
            <div className="pl-4">
              <ButtonDropdown
                isOpen={this.state.pignationToggleB}
                toggle={this.pignationToggle}
              >
                <DropdownToggle caret color="secondary dropDownDesign" outline>
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
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Devices;
