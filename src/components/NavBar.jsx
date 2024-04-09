import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-bootstrap";

import { CartWidget } from "./CartWidget";
export const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">baldo3D</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/category/diseño3D" as={NavLink}>
            diseño 3D
          </Nav.Link>
          <Nav.Link to="/category/ogjetos" as={NavLink}>
            objetos 3D
          </Nav.Link>
          <Nav.Link to="/category/personalizados" as={NavLink}>
            personalizados
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
