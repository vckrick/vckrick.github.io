import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #adb1b8;
    &:hover {
      color: white;
    }
  }
`;

export default function NaviBar() {
  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>English</Navbar.Brand>
            <Navbar.Toggle aria-controls="responisve-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Главная
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/game" style={{ textDecoration: "none" }}>
                    Учить слова
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    </>
  );
}
