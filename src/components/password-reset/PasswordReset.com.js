import React, {useState} from "react";
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
export const ResetPassword = ({handleOnChange , email, formSwitcher, handleOnResetSubmit }) => {

  
   return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-info text-center">Reset Password</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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
            <a href="#" onClick={() => formSwitcher('login')}>Login Now?</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

ResetPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
   email: PropTypes.string.isRequired,

    
}
