import React, {useState} from "react";
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
export const Login = ({handleOnChange ,formSwitcher, email, pass , handleOnSubmit }) => {

  
   return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-info text-center">Client Login</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleOnChange}
                  value={email}
                  required
                />
              </Form.Group>
              <br />

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="password"
                  value={pass}
                  onChange={handleOnChange}
                  required
                />
              </Form.Group>
              <br />

              <div className="text-center">
                <Button type="submit">Log in</Button>
              </div>
              <hr />
            </Form>
          </Col>
        </Row>

        <Row>
          <Col>
            <a href="#" onClick={()=>formSwitcher('reset')}>Forget Password</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Login.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
   email: PropTypes.string.isRequired,
   pass: PropTypes.string.isRequired,
    
}
