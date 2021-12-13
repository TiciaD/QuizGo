import React from "react";
import { Col, Form } from "react-bootstrap";

export default function QuestionForm(props) {
  return (
    <>
      <Form.Group
        as={Col}
        lg="8"
        controlId="validationCustomQuestion"
        className="mb-3"
      >
        <Form.Label>Question {props.num}</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Question 1"
          //   onChange={(e) => setField("email", e.target.value)}
          //   isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {/* {errors.email} */}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group
        as={Col}
        lg="8"
        controlId="validationCustomCorAns"
        className="mb-3"
      >
        <Form.Label>Correct Answer</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Correct Answer"
          //   onChange={(e) => setField("email", e.target.value)}
          //   isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {/* {errors.email} */}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group
        as={Col}
        lg="8"
        controlId="validationCustomIncAns1"
        className="mb-3"
      >
        <Form.Label>Incorrect Answer 1</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Incorrect Answer 1"
          //   onChange={(e) => setField("email", e.target.value)}
          //   isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {/* {errors.email} */}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group
        as={Col}
        lg="8"
        controlId="validationCustomIncAns"
        className="mb-3"
      >
        <Form.Label>Incorrect Answer 2</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Incorrect Answer 2"
          //   onChange={(e) => setField("email", e.target.value)}
          //   isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {/* {errors.email} */}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group
        as={Col}
        lg="8"
        controlId="validationCustomIncAns"
        className="mb-3"
      >
        <Form.Label>Incorrect Answer 3</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Incorrect Answer 3"
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
