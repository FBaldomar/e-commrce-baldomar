import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";
export const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">baldo3D</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">diseño 3D</Nav.Link>
          <Nav.Link href="#features">objetos 3D</Nav.Link>
          <Nav.Link href="#pricing">personalizados</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
