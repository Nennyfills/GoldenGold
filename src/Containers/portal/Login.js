import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Login extends Component {

  constructor(props){
    super(props)
    this.LogAdmin = this.LogAdmin.bind(this);
    this.LogClient = this.LogClient.bind(this);

    this.state ={
      isLoggedIn:false
    }
  }


  LogAdmin(){

    this.setState({
      isLoggedIn : true
    })
    sessionStorage.setItem("isLoggedIn" , true)
    sessionStorage.setItem("isadmin" , "admin")
    this.props.history.push('/dashboard')
   
  }

  
  LogClient(){

    this.setState({
      isLoggedIn : true
    })
    sessionStorage.setItem("isLoggedIn" , true)
    this.props.history.push('/clientzone')
   
  }

  render() {
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
                        <Input type="text" placeholder="Username" autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" />
                      </InputGroup>
                      
                      <Row>
                        <Col xs="6">
                        
                    <Button color="primary" className="px-4" onClick={this.LogAdmin}>ADMIN Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                        <Button color="primary" className="px-4" onClick={this.LogClient}>Client Login</Button>
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
