import React from "react";
import { Form, Button } from "react-bootstrap";

export default function Register() {
  return (
    <div className="App d-flex flex-column align-items-center">
      <h1>Sign Up!</h1>
      <Form style={{ width: "300px" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
