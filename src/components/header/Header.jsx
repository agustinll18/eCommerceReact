import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import DarkModeToggle from "./darkModeToggle/DarkModeToggle"; /* 
import $ from "jquery"; */

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="lg"
        variant="lg"
        id="navbar"
        fixed="top"
      >
        <Container class="container-fluid" id="containerUl">
          <Navbar.Brand href="#" id="brandN" >
            ALL
          </Navbar.Brand>
          <DarkModeToggle />
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
