import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {  login } from '../../utilities/apicalls'

class Login extends Component {

  constructor(props) {
    super(props)
    this.Login = this.Login.bind(this);
    this.loginCreate = this.loginCreate.bind(this);

    this.state = {
      user:{}
    }
  }

  checkif() {
    this.setState({
      rtoa: sessionStorage.getItem("isAdmin"),
      rtoc: sessionStorage.getItem("isClient")
    })
  }

  componentDidMount() {
    this.checkif()
  }

  loginCreate(e){
    var user = this.state.user
     user[e.target.name] = e.target.value
    this.setState({
      "user":user
    })
  }

  async Login() {
    var user = await login("http://localhost:3600/api/login", this.state.user)
    console.log(user)
    if (user.type == "admin") {
      sessionStorage.setItem("isAdmin", true)
      this.setState({
        rtoa: true
      })
    } else if (user.type == "client") {
      sessionStorage.setItem("isClient", true); this.setState({
        rtoc: true
      })
    }
  }



  render() {
    const { rtoc } = this.state;
    const { rtoa } = this.state;

    if (rtoc) {
      return <Redirect to='/clientzone' />;
    }
    if (rtoa) {
      return <Redirect to='/admin' />;
    }
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" name="username" placeholder="Username" autoComplete="username"  onChange={this.loginCreate} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" name="password" placeholder="Password" autoComplete="current-password" onChange={this.loginCreate} />
                      </InputGroup>

                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.Login}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
