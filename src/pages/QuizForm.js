import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Accordion,
} from "react-bootstrap";
import { Categories } from "../components";
import { QuestionForm } from "../components";
import "./QuizForm.css";

export default function QuizForm() {
  return (
    <div className="Form-page">
      <Container className="form-container">
        <Row className="justify-content-center mx-auto">
          <Col md={10}>
            <Card className="intro-card rounded-0 d-flex justify-content-center">
              <Card.Body>
                <Card.Title className="text-primary fw-bold fs-1 pt-2">
                  Quiz Creator
                </Card.Title>
                <Container>
                  <Form
                    noValidate
                    // validated={!errors}
                    // onSubmit={handleSubmit}
                  >
                    <Row className="flex-column justify-content-center align-items-center text-primary">
                      <Form.Group className="mb-4" as={Col} lg="8">
                        <Form.Label
                          className="me-sm-2 d-flex align-self-start"
                          htmlFor="inlineFormCustomSelectCategory"
                        >
                          Select Category
                        </Form.Label>
                        <Form.Select
                          className="me-sm-2"
                          id="inlineFormCustomSelectCategory"
                        >
                          {Categories.map((cat, i) => {
                            return (
                              <option key={i} value={cat.value}>
                                {cat.category}
                              </option>
                            );
                          })}
                        </Form.Select>
                      </Form.Group>
                    </Row>
                    <Row className="justify-content-center align-items-center my-3 mx-2">
                      <Form.Group className="mb-4" as={Col} xs="10" md="4">
                        <Form.Label
                          className="me-sm-2 d-flex align-self-start"
                          htmlFor="inlineFormCustomSelectDifficulty"
                        >
                          Select Difficulty
                        </Form.Label>
                        <Form.Select
                          className="me-sm-2 text-primary"
                          id="inlineFormCustomSelectDifficulty"
                          // onChange={(e) => {
                          //   console.log(e.target.value);
                          //   setDifficulty(e.target.value);
                          // }}
                        >
                          <option value="easy">Easy</option>
                          <option value="medium">Medium</option>
                          <option value="hard">Hard</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-4" as={Col} xs="10" md="4">
                        <Form.Label
                          className="me-sm-2 d-flex align-self-start"
                          htmlFor="inlineFormCustomSelectDifficulty"
                        >
                          Select Type
                        </Form.Label>
                        <Form.Select
                          className="me-sm-2 text-primary"
                          id="inlineFormCustomSelectType"
                          // onChange={(e) => {
                          //   console.log(e.target.value);
                          //   setType(e.target.value);
                          // }}
                        >
                          <option value="multiple">Multiple Choice</option>
                          <option value="boolean">True/False</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-4" as={Col} xs="10" md="4">
                        <Form.Label
                          className="me-sm-2 d-flex align-self-start"
                          htmlFor="inlineFormCustomSelectDifficulty"
                        >
                          Select Amount
                        </Form.Label>
                        <Form.Select
                          className="me-sm-2 text-primary"
                          id="inlineFormCustomSelectAmount"
                          // onChange={(e) => {
                          //   console.log(e.target.value);
                          //   setAmount(e.target.value);
                          // }}
                        >
                          <option value="5">5</option>
                          <option value="10">10</option>
                          <option value="15">15</option>
                        </Form.Select>
                      </Form.Group>
                    </Row>
                    <hr />
                    <Row className="flex-column justify-content-center align-items-center">
                      <Col className="my-3">
                        <Accordion defaultActiveKey="0">
                          <Accordion.Item eventKey="0">
                            <Accordion.Header className="fw-bold">
                              Questions 1-5
                            </Accordion.Header>
                            <Accordion.Body>
                              <QuestionForm num={1} />
                              <QuestionForm num={2} />
                              <QuestionForm num={3} />
                              <QuestionForm num={4} />
                              <QuestionForm num={5} />
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>Questions 6-10</Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est
                              laborum.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                            <Accordion.Header>Questions 11-15</Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est
                              laborum.
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </Col>
                      <Col md={6}>
                        <Button
                          variant="outline-primary"
                          type="submit"
                          className="fw-bold border-3 rounded-pill fs-4 px-5"
                        >
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
