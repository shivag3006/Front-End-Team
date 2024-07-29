
import React, { useRef } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Offcanvas, Container, Button, NavDropdown } from 'react-bootstrap';
import "../navbar.css";

const CustomNavbar = () => {
  const offcanvasRef = useRef(null);

  const handleLinkClick = () => {
    const offcanvasElement = offcanvasRef.current;
    if (offcanvasElement) {
      const bsOffcanvas = Offcanvas.getInstance(offcanvasElement);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }
  };

  return (
    <Navbar expand="lg" bg="warning" fixed="top" className="shadow rounded">
      <Container fluid>
        <Navbar.Brand as={Link} to="#">
          <img
            src={"vidhyahan.png"}
            alt="logo is not working"
            width="90px"
            height="50px"
          />
          <b className="p-3 mb-1">𝐕𝐢𝐝𝐡-ये-𝐃𝐡𝐚𝐧</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          ref={offcanvasRef}
          style={{ backgroundColor: 'white' }} // Ensure the background color is white
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto mb-lg-0">
              <Nav.Link as={NavLink} to="/home" onClick={handleLinkClick}>
                <b>Home</b>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/" onClick={handleLinkClick}>
                <b>AboutUs</b>
              </Nav.Link>
              <NavDropdown title={<b>What we do</b>} id="what-we-do-dropdown">
                <NavDropdown.Item href="https://www.instagram.com/vidyadhan_non_profit_org/" onClick={handleLinkClick}>
                  Vidhyadhan Instagram
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.flipkart.com/" onClick={handleLinkClick}>
                  Flipkart Website
                </NavDropdown.Item>
                <NavDropdown.Item href="https://y4d.ngo/what_we_do" onClick={handleLinkClick}>
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/projects" onClick={handleLinkClick}>
                <b>Projects</b>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/gallery" onClick={handleLinkClick}>
                <b>Gallery</b>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contactus" onClick={handleLinkClick}>
                <b>ContactUs</b>
              </Nav.Link>
              <NavDropdown title={<b>Media Corner</b>} id="media-corner-dropdown">
                <NavDropdown.Item href="https://web.whatsapp.com/" onClick={handleLinkClick}>
                  Vidhyadhan Whatsapp
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.amazon.com/" onClick={handleLinkClick}>
                  Flipkart Website
                </NavDropdown.Item>
                <NavDropdown.Item href="https://y4d.ngo/what_we_do" onClick={handleLinkClick}>
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/donate" className="text-danger" onClick={handleLinkClick}>
                <b>Donate</b>
              </Nav.Link>
            </Nav>
            <Button variant="outline-success">
              <a href="login">
                <b>Login</b>
              </a>
            </Button>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;



