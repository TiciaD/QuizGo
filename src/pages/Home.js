import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="my-title pb-5">QuizGo</Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center mx-auto">
          <Col md={8}>
            <Card className="intro-card rounded-0 d-flex justify-content-center align-items-center">
              <Col md={12}>
                <Button variant="outline-primary">QuickPlay</Button>
              </Col>
              <Col className="my-2">
                <Button variant="outline-primary">SignUp</Button>
              </Col>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
