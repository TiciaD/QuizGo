import React, { useContext, useEffect } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import authContext from "../utilities/auth-context";
import quizContext from "../utilities/quiz-context";
import "./Profile.css";

export default function Profile() {
  const {
    token,
    setToken,
    getUserData,
    userData,
    setUserData,
    destroyToken,
    userQuizzes,
    getUserQuizzes,
  } = useContext(authContext);

  const { questions, setQuestions, setCurrentQuestion, setScore } =
    useContext(quizContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    destroyToken();
    navigate("/login");
  };

  useEffect(() => {
    if ("token" in localStorage) {
      const value = localStorage.getItem("token");
      setToken(value);
    }
    if (!userData) {
      getUserData();
    } else {
      const user = JSON.parse(localStorage.getItem("User"));
      setUserData(user);
    }
    getUserQuizzes();
  }, [userQuizzes.length]);

  const setUserQuiz = (index) => {
    // console.log({
    //   question: userQuizzes[index].questions[currQuestion].question.question,
    // });
    // console.log({ setQuestions: userQuizzes[index].questions });
    // console.log(
    //   ...userQuizzes[index].questions[0].question.possible_answers.split("|")
    // );
    // console.log(
    //   questions[currQuestion]?.correct_answer ||
    //     userQuizzes[index].questions[0].question.correct_answer
    // );
    setQuestions("");
    setScore(0);
    setCurrentQuestion(0);
    setQuestions(userQuizzes[index].questions);
    navigate("/quiz");
    console.log({ questions: questions });
  };

  return (
    <div className="Profile-page">
      <Container className="profile-container">
        <Row className="justify-content-center mx-auto">
          <Col md={10}>
            <Card className="profile-card rounded-0 d-flex justify-content-center mt-3 text-primary">
              {!token && (
                <Card.Body>
                  <Card.Title className="fw-bold fs-1 pt-4">
                    Looks like you're not signed in...
                  </Card.Title>
                  <Col className="m-2 pb-3">
                    <Button
                      className="fw-bold border-3 rounded-pill fs-2 px-4"
                      variant="outline-primary"
                      size="lg"
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </Button>
                  </Col>
                  <Col className="fs-2 mb-3">OR</Col>
                  <Col className="fs-2 mx-3 mb-3">
                    Sign Up to save your score, create your own quizzes, access
                    extra categories and more!
                  </Col>
                  <Col className="m-2">
                    <Button
                      className="fw-bold border-3 rounded-pill fs-2 px-5 mb-3"
                      variant="outline-primary"
                      size="lg"
                      onClick={() => navigate("/register")}
                    >
                      SignUp
                    </Button>
                  </Col>
                </Card.Body>
              )}
              {token && (
                <Card.Body>
                  <Card.Title className="fw-bold fs-1 pt-4 mb-3">
                    {userData.username}
                  </Card.Title>
                  <Col className="m-2 py-3 fs-2">email: {userData.email}</Col>
                  <Col className="mb-2">
                    <Button
                      className="fw-bold text-danger fs-4"
                      variant="link"
                      size="lg"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </Col>
                </Card.Body>
              )}
            </Card>
          </Col>
          {token && (
            <Col md={10} className="mt-5">
              <Card className="profile-card rounded-0 d-flex justify-content-center mt-3 text-primary">
                <Card.Body>
                  <Card.Title className="fw-bold fs-1 pt-4 mb-4">
                    Your Quizzes
                  </Card.Title>

                  {userQuizzes ? (
                    <Col className="mx-3">
                      {userQuizzes.map((quiz, i) => {
                        return (
                          <Card
                            border="primary"
                            className="userQuiz-card shadow-sm mb-3"
                            key={i}
                          >
                            <Card.Body>
                              <Card.Title className="text-primary fs-3 fw-bold text-decoration-underline">
                                {quiz.name}
                              </Card.Title>
                              <Row className="text-primary fw-bold fs-5 pt-2">
                                <Col>
                                  Category: {quiz.categories.category.type}
                                </Col>
                                <Col>
                                  Difficulty:{" "}
                                  {quiz.difficulties.difficulty.level}
                                </Col>
                                <Col>
                                  <Button
                                    variant="primary"
                                    className="fw-bold border-3 rounded-pill px-3"
                                    onClick={() => setUserQuiz(i)}
                                  >
                                    Play Quiz
                                  </Button>
                                </Col>
                              </Row>
                            </Card.Body>
                          </Card>
                        );
                      })}
                    </Col>
                  ) : (
                    <Col className="m-2 py-3 text-muted fs-3 mb-3">
                      No saved quizzes
                    </Col>
                  )}
                  <Col className="m-2">
                    <Button
                      className="fw-bold border-3 rounded-pill fs-2 px-5 mb-3"
                      variant="outline-primary"
                      size="lg"
                      onClick={() => navigate("/create")}
                    >
                      Create a Quiz
                    </Button>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}
