import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "./../../Assets/Logo.png";
import Discord from "./../../Assets/discord.png";
import Insta from "./../../Assets/instagram 1.png";
import Twitter from "./../../Assets/Twitter.png";

export default function Footer() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="black">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} height="90px" width="auto" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav d-flex justify-content-around">
            <Nav className="me-auto ml-3">
              <Nav.Link href="#Home">HOME</Nav.Link>
              <Nav.Link href="#Text">OVERVIEW</Nav.Link>
              <Nav.Link href="#Roadmap">ROAD MAP</Nav.Link>
              <Nav.Link href="#Team">TEAM</Nav.Link>
              <Nav.Link href="#FAQ">FAQ</Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link href="#deets">
              <a href="https://www.instagram.com/pixelteco"target="_blank">
                <img src={Insta} width="auto" height="30px" />
              </a>  
              </Nav.Link>
              <Nav.Link href="#deets">
              <a href="https://discord.gg/EHQQy76FPJ"target="_blank">
                <img src={Discord} width="auto" height="30px" />
              </a>  
              </Nav.Link>
              <Nav.Link href="#deets">
              <a href="https://twitter.com/pixelteco"target="_blank">  
                <img src={Twitter} width="auto" height="30px" />
              </a>  
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
