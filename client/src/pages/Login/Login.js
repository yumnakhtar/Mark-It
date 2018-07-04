import React, { Component } from "react";
import { InputEmail, InputPassword, LoginBtn} from "../../components/LoginForm";
import { Col, Row, Container } from "../../components/Grid";




class Login extends Component {
    state = {
      email: [],
      password: []
    };
  
    componentDidMount() {
     
    }
    render() {
      return (
        <Container fluid>
          <Row>
            <Col size="md-12">
            
              <form>
                <InputEmail name="email" placeholder="Email (Required)" />
                <InputPassword name="password" placeholder="password (Required)" />
                <LoginBtn>Login </LoginBtn>
              </form>
            </Col>
            
          </Row>
        </Container>
      );
    }
  }
  

export default Login;
