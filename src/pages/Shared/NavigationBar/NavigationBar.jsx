import React, { useContext } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link className="me-2" to="/">
                Home
              </Link>
              <Link className="me-2" href="#About">
                About
              </Link>
              <Link href="#career">Career</Link>
            </Nav>
            <Nav>
              {user && (
                <FaUserCircle style={{ fontSize: "2.5rem" }}></FaUserCircle>
              )}
              {user ? (
                <Link to="/logout">
                  <Button variant="secondary">Log out</Button>
                </Link>
              ) : (
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
