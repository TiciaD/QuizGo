import React, { useContext, useEffect } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import authContext from "../utilities/auth-context";
import "./Profile.css";

export default function Profile() {
  const { token, userData, destroyToken, userQuizzes, getUserQuizzes } =
    useContext(authContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    destroyToken();
    navigate("/login");
  };

  useEffect(() => {
    let userToken = window.localStorage.getItem("token");
    if (userToken) {
      getUserQuizzes();
    }
  }, [token, userData]); // eslint-disable-line react-hooks/exhaustive-deps

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
                  <Card.Title className="fw-bold fs-1 pt-4 mb-3">
                    Your Quizzes
                  </Card.Title>

                  {userQuizzes ? (
                    <Col>
                      {userQuizzes.map((quiz, i) => {
                        return (
                          <Card key={i}>
                            <Card.Header>Featured</Card.Header>
                            <Card.Body>
                              <Card.Title>{quiz.name}</Card.Title>
                              <Card.Text>
                                {/* {quiz.categories.category.type}
                                <br />
                                Difficulty: {quiz.difficulties.difficulty.level} */}
                              </Card.Text>
                              <Button variant="primary">Go somewhere</Button>
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
