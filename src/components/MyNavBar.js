import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import { IconContext } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import "./MyNavBar.css";

function MyNavBar() {
  return (
    <div>
      <Navbar bg="white" variant="light" fixed="bottom" className="p-3">
        <Container className="justify-content-evenly">
          <Row>
            <Col>
              <Navbar.Brand as={Link} to="/">
                <IconContext.Provider
                  value={{ size: "100px", className: "myReact-icons" }}
                >
                  <AiFillHome />
                </IconContext.Provider>
              </Navbar.Brand>
            </Col>
          </Row>
          <Row>
            <Col>
              <Navbar.Brand as={Link} to="profile">
                <IconContext.Provider
                  value={{ size: "100px", className: "myReact-icons" }}
                >
                  <BiUserCircle />
                </IconContext.Provider>
              </Navbar.Brand>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavBar;
