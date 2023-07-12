import React, { useState } from "react";
import { Button, Navbar, Nav, Dropdown } from "react-bootstrap";
import "../styles/navbar.css";

function Header() {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showSubmenu1, setShowSubmenu1] = useState(false);
  const [showSubmenu2, setShowSubmenu2] = useState(false);

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
              
              alignRight
            >
              <Dropdown.Toggle
                as={Nav.Link}
                id="solutions-dropdown"
                onMouseEnter={handleMouseEnter}
               
              >
                SOLUTIONS
              </Dropdown.Toggle>
              <Dropdown.Menu
                show={showSubmenu}
                className="menu"
                onMouseEnter={() => {
                  setShowSubmenu(true);
                }}
               
              >
                <Dropdown.Item>
                  <Nav.Link
                    href="/about"
                    className="submenu-link"
                    onMouseEnter={() => {
                      setShowSubmenu(true);
                    }}
                   
                  >
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
                <Dropdown.Item href="#">
                  <Nav.Link
                    href="/about"
                    className="submenu-link"
                    onMouseEnter={() => {
                      setShowSubmenu1(true);
                      setShowSubmenu(false);
                      setShowSubmenu2(false)
                    }}
                    onMouseLeave={() =>{setShowSubmenu1(false)}}
                  >
                    Solution 2
                  </Nav.Link>
                  {showSubmenu1 && (
                    <Dropdown.Menu
                      show={showSubmenu1}
                      className="submenu"
                      align="right"
                    >
                      <Dropdown.Item href="#">Submenu 4</Dropdown.Item>
                      <Dropdown.Item href="#">Submenu 5</Dropdown.Item>
                      <Dropdown.Item href="#">Submenu 6 </Dropdown.Item>
                    </Dropdown.Menu>
                  )}
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <Nav.Link
                    href="/about"
                    className="submenu-link"
                    onMouseEnter={() => {
                      setShowSubmenu2(true);
                    }}
                    onMouseLeave={() =>{setShowSubmenu2(false)}}
                  >
                    Solution 3
                  </Nav.Link>
                  {showSubmenu2 && (
                    <Dropdown.Menu
                      show={showSubmenu2}
                      className="submenu"
                      align="right"
                    >
                      <Dropdown.Item href="#">Submenu 6</Dropdown.Item>
                      <Dropdown.Item href="#">Submenu 7</Dropdown.Item>
                      <Dropdown.Item href="#">Submenu 8 </Dropdown.Item>
                    </Dropdown.Menu>
                  )}
                </Dropdown.Item>
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
