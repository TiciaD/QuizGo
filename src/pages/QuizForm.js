import React, { useContext, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import { Categories } from "../components";
import userQuizContext from "../utilities/user-quiz-context";
import authContext from "../utilities/auth-context";
import "./QuizForm.css";

export default function QuizForm() {
  const {
    allQuestions,
    setAllQuestions,
    userQuestions,
    setUserQuestions,
    userOptions,
    setUserOptions,
    setUserCategory,
    setUserDifficulty,
    userDifficulty,
    userCategory,
    makeQuiz,
  } = useContext(userQuizContext);

  const [name, setName] = useState("Quiz");

  const { token } = useContext(authContext);

  const setField = (field, value) => {
    setUserQuestions({
      ...userQuestions,
      [field]: value,
    });
    console.log(userQuestions);
    // Check and see if errors exist, and remove them from the error object:
    // if (!!errors[field])
    //   setErrors({
    //     ...errors,
    //     [field]: null,
    //   });
  };

  const handleAddQuestion = () => {
    // stringify all options
    let allOptions = `${userQuestions.correct_answer}|${userQuestions.possible_answer1}|${userQuestions.possible_answer2}|${userQuestions.possible_answer3}`;
    setUserOptions(allOptions);
    console.log(userOptions);

    setAllQuestions(userQuestions);
    console.log({ QuestionsArr: allQuestions });

    // clear question field
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );

    // axios POST, send question to database
    console.log(userQuestions);

    // reset user questions state
    setUserQuestions("");
    console.log(userQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(allQuestions);
    let myToken = token;
    makeQuiz(allQuestions, userDifficulty, userCategory, name, myToken);
  };

  return (
    <div className="Form-page">
      <Container className="form-container">
        <Row className="justify-content-center mx-auto">
          <Col md={10}>
            <Card className="intro-card rounded-0 d-flex justify-content-center">
              <Card.Body className="mb-3">
                <Card.Title className="text-primary fw-bold fs-1 pt-2 pb-3">
                  Quiz Creator
                </Card.Title>
                <Container>
                  <Form
                    noValidate
                    // validated={!errors}
                    // onSubmit={handleSubmit}
                  >
                    <Row className="justify-content-center align-items-center text-primary">
                      <Form.Group className="mb-4" as={Col} xs="10" md="4">
                        <Form.Label
                          className="me-sm-2 d-flex align-self-start"
                          htmlFor="inlineFormCustomSelectCategory"
                        >
                          Select Category
                        </Form.Label>
                        <Form.Select
                          className="me-sm-2"
                          id="inlineFormCustomSelectCategory"
                          onChange={(e) => {
                            console.log(e.target.value);
                            setUserCategory(e.target.value);
                          }}
                        >
                          {Categories.map((cat, i) => {
                            return (
                              <option key={i} value={i + 1}>
                                {cat.category}
                              </option>
                            );
                          })}
                        </Form.Select>
                      </Form.Group>
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
                          onChange={(e) => {
                            console.log(e.target.value);
                            setUserDifficulty(e.target.value);
                          }}
                        >
                          <option value="1">Easy</option>
                          <option value="2">Medium</option>
                          <option value="3">Hard</option>
                        </Form.Select>
                      </Form.Group>
                    </Row>
                    <hr />
                    <Row>
                      <Col>Total Questions: {allQuestions.length}</Col>
                    </Row>
                    <Row className="justify-content-center p-2 text-muted">
                      <Form.Group
                        as={Col}
                        lg="8"
                        controlId="validationCustomQuestion"
                        className="mb-3"
                      >
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Quiz Name"
                          className="mb-3"
                        >
                          <Form.Control
                            required
                            type="text"
                            placeholder="Enter Question"
                            onChange={(e) => setName("name", e.target.value)}
                            //   isInvalid={!!errors.email}
                          />
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">
                          {/* {errors.email} */}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        lg="8"
                        controlId="validationCustomQuestion"
                        className="mb-3"
                      >
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Question"
                          className="mb-3"
                        >
                          <Form.Control
                            required
                            //   value={userQuestions}
                            type="text"
                            placeholder="Enter Question"
                            onChange={(e) =>
                              setField("question", e.target.value)
                            }
                            //   isInvalid={!!errors.email}
                          />
                        </FloatingLabel>
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
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Correct Answer"
                          className="mb-3"
                        >
                          <Form.Control
                            required
                            type="text"
                            placeholder="Correct Answer"
                            onChange={(e) =>
                              setField("correct_answer", e.target.value)
                            }
                            //   isInvalid={!!errors.email}
                          />
                        </FloatingLabel>
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
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Incorrect Answer 1"
                          className="mb-3"
                        >
                          <Form.Control
                            required
                            type="text"
                            placeholder="Incorrect Answer 1"
                            onChange={(e) =>
                              setField("possible_answer1", e.target.value)
                            }
                            //   isInvalid={!!errors.email}
                          />
                        </FloatingLabel>
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
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Incorrect Answer 2"
                          className="mb-3"
                        >
                          <Form.Control
                            required
                            type="text"
                            placeholder="Incorrect Answer 2"
                            onChange={(e) =>
                              setField("possible_answer2", e.target.value)
                            }
                            //   isInvalid={!!errors.email}
                          />
                        </FloatingLabel>
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
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Incorrect Answer 3"
                          className="mb-3"
                        >
                          <Form.Control
                            required
                            type="text"
                            placeholder="Incorrect Answer 3"
                            onChange={(e) =>
                              setField("possible_answer3", e.target.value)
                            }
                            //   isInvalid={!!errors.email}
                          />
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">
                          {/* {errors.email} */}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="d-flex flex-column align-items-center">
                      <Col md={6}>
                        <Button
                          variant="outline-primary"
                          className="fw-bold border-3 rounded-pill fs-5 px-3 mb-4"
                          onClick={handleAddQuestion}
                        >
                          Add Question
                        </Button>
                      </Col>
                      <Col md={6}>
                        <Button
                          variant="outline-primary"
                          type="submit"
                          className="fw-bold border-3 rounded-pill fs-4 px-5"
                          onClick={handleSubmit}
                        >
                          Submit Quiz
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
