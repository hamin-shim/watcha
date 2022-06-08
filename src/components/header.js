import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function Header() {
  const path = useLocation().pathname;
  console.log(path);
  return (
    <Navbar bg="light" expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="/">새빈</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          style={{ justifySelf: "flex-end" }}
          id="basic-navbar-nav"
        >
          <div className="me-auto" />
          <Nav>
            <Nav.Link
              href="/talk"
              className={path === "/talk" ? "selected" : ""}
            >
              갤러리 소개
            </Nav.Link>
            <Nav.Link
              href="/introduction"
              className={path === "/introduction" ? "selected" : ""}
            >
              전시 소개
            </Nav.Link>
            <Nav.Link
              href="/timetable"
              className={path === "/timetable" ? "selected" : ""}
            >
              VIP 경매 안내
            </Nav.Link>
            <Nav.Link
              href="/personnel"
              className={path === "/personnel" ? "selected" : ""}
            >
              구성원 소개
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
