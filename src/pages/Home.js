import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="my-title my-5">QuizGo</Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center mx-auto">
          <Col md={8}>
            <Card className="intro-card rounded-0 d-flex justify-content-center align-items-center">
              <Col md={12} className="mt-5 pt-5">
                <Button
                  className="fw-bold border-3 rounded-pill fs-1 px-5"
                  variant="outline-primary"
                  size="lg"
                >
                  QuickPlay
                </Button>
              </Col>
              <Col className="my-5">
                <Button
                  className="fw-bold border-3 rounded-pill fs-1 px-5"
                  variant="outline-primary"
                  size="lg"
                >
                  SignUp
                </Button>
              </Col>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
