import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import DarkModeToggle from "./darkModeToggle/DarkModeToggle"; 

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" fixed="top"style={{ borderBottom:"2px solid #000"}}>
        <Container style={{margin:"0% 10% 0% 10%",}}>
          <Navbar.Brand href="#home" className="brandN"><h1>Haedo Entrena</h1></Navbar.Brand>
          <DarkModeToggle />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav"style={{justifyContent: "flex-end"}} >
            <Nav className="me-auto"  id="navLinks">
              <Nav.Link className="links" href="#quienesSomos">Quienes somos</Nav.Link>
              <Nav.Link className="links" href="#Cursos">Cursos</Nav.Link>
              <Nav.Link className="links" href="#pricing">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
