import React, { useState } from "react";
import { Button, Navbar, Nav, Dropdown } from "react-bootstrap";
import "../styles/navbar.css";

function Header() {
  const [showSubmenu, setShowSubmenu] = useState(false);


  const handleMouseEnter = () => {
    setShowSubmenu(true);

  };

  const handleMouseLeave = () => {
    setShowSubmenu(false);
  };

  return (
    <>
      <Navbar bg="transparent" variant="dark" expand="lg">
        <Navbar.Brand href="/" className="logo">
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto nav-links">
            <Dropdown
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              show={showSubmenu}
              alignRight
            >
              <Dropdown.Toggle
                as={Nav.Link}
                id="solutions-dropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                SOLUTIONS
              </Dropdown.Toggle>
              <Dropdown.Menu
                show={showSubmenu}
                className="submenu"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Dropdown.Item>
                  <Nav.Link href="#" className="submenu-link">
                    Solution 1
                  </Nav.Link>
                  {showSubmenu && (
                    <Dropdown.Menu
                      show={showSubmenu}
                      className="submenu"
                      align="right"
                    >
                      <Dropdown.Item href="#">Submenu 1</Dropdown.Item>
                      <Dropdown.Item href="#">Submenu 2</Dropdown.Item>
                      <Dropdown.Item href="#">Submenu 3</Dropdown.Item>
                    </Dropdown.Menu>
                  )}
                </Dropdown.Item>
                <Dropdown.Item href="#">Solution 2</Dropdown.Item>
                <Dropdown.Item href="#">Solution 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="/about">SECTEURS</Nav.Link>
            <Nav.Link href="/contact">TARIFICATION</Nav.Link>
            <Nav.Link href="/about">NOS CLIENTS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button className="buttonC ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Mon Compte
        </Button>
        <Button className="buttonD ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Nous-Contacter
        </Button>
      </Navbar>
    </>
  );
}

export default Header;
