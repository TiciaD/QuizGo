import React from "react";
import { Col, Form } from "react-bootstrap";

export default function QuestionForm(props) {
  return (
    <>
      <Form.Group
        as={Col}
        lg="6"
        controlId="validationCustomEmail"
        className="mb-3"
      >
        <Form.Label>Question {props.num}</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="Enter email"
          //   onChange={(e) => setField("email", e.target.value)}
          //   isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {/* {errors.email} */}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
}
