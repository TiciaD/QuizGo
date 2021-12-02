import { useState, useContext } from "react";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Form,
  ToggleButton,
} from "react-bootstrap";
import { AnonCategories } from "../components";
import { useNavigate } from "react-router-dom";
import quizContext from "../utilities/quiz-context";
import "./QuizSettings.css";

export default function QuizSettings(props) {
  // Model
  // track which button has been selected
  //   const [checkedItem, setChecked] = useState("");
  //   // track which category has been selected
  //   const [category, setCategory] = useState("");
  //   // track which difficulty has been selected
  //   const [difficulty, setDifficulty] = useState("easy");
  //   // set state of error message
  //   const [error, setError] = useState("");

  const navigate = useNavigate();

  const {
    category,
    setCategory,
    toggledItem,
    setToggle,
    difficulty,
    setDifficulty,
    error,
    setError,
    fetchQuestions,
  } = useContext(quizContext);

  const handleSubmit = () => {
    if (!category || !difficulty) {
      setError(true);
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
  };

  return (
    // View
    <div className="Settings-page">
      <Container>
        <Row>
          <Col className="my-title my-5">QuizGo</Col>
        </Row>
      </Container>
      <Container className="mb-5">
        <Row className="justify-content-center mx-auto">
          <Col md={10}>
            <Card className="intro-card rounded-0 d-flex justify-content-center align-items-center mb-3">
              <Card.Body>
                <Card.Title className="text-primary fw-bold fs-1 pt-4">
                  Select Category
                </Card.Title>
              </Card.Body>
              {error && (
                <Col className="px-2 py-1 fs-4 rounded bg-danger text-white mb-2">
                  Please Select a Category
                </Col>
              )}
              <Col sm={12} className="mb-2">
                <Form>
                  <Row className="px-5">
                    {/* loop through categories array for anonymous users */}
                    {AnonCategories.map((cat, i) => {
                      // checked value is initialized as false
                      var checked = false;
                      // if state matches id
                      if (toggledItem === "toggle-check-" + i) {
                        // set checked value to true
                        checked = true;
                      }
                      return (
                        <Col md={6} key={i}>
                          <ToggleButton
                            key={cat.category}
                            className="mb-2 fw-bold border-3 rounded-pill fs-4 w-100"
                            id={"toggle-check-" + i}
                            type="checkbox"
                            variant="outline-primary"
                            checked={checked}
                            value={cat.value}
                            onChange={(e) => {
                              console.log(toggledItem);
                              // when a user clicks on a category button:
                              // set checked state to match id of that button
                              setToggle(e.target.id);
                              // set category to value of button
                              setCategory(cat.value);
                            }}
                          >
                            {cat.category}
                          </ToggleButton>
                        </Col>
                      );
                    })}
                  </Row>
                  <Row className="justify-content-center align-items-center mt-2">
                    <Col xs="auto" className="my-2">
                      <Form.Label
                        className="me-sm-2"
                        htmlFor="inlineFormCustomSelect"
                      >
                        Select Difficulty
                      </Form.Label>
                      <Form.Select
                        className="me-sm-2 text-primary"
                        id="inlineFormCustomSelect"
                        size="lg"
                        onChange={(e) => {
                          console.log(e.target.value);
                          setDifficulty(e.target.value);
                        }}
                      >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Form>
              </Col>
              <Col className="m-2">
                <Button
                  className="fw-bold border-3 rounded-pill fs-2 px-5"
                  variant="outline-primary"
                  size="lg"
                  onClick={() => navigate("/register")}
                >
                  Unlock More Categories!
                </Button>
              </Col>
              <Col className="mb-5">
                <Button
                  className="fw-bold border-3 rounded-pill fs-2 px-5"
                  variant="outline-primary"
                  size="lg"
                  onClick={handleSubmit}
                >
                  Start
                </Button>
              </Col>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
