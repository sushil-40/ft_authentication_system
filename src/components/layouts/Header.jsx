import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { FaUserPlus } from "react-icons/fa";
import DefaultLayout from "./DefaultLayout";

const Header = () => {
  return (
    <Navbar expand="md" className="bg-dark" variant="dark">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="text-white text-decoration-none"
        >
          Authentication-System
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              <FaHome className="me-1" />
              Home
            </Link>
            <Link className="nav-link" to="/signup">
              <FaUserPlus className="me-1" />
              SignUp
            </Link>
            <Link className="nav-link" to="/login">
              <FiLogIn className="me-1" />
              SignIn
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
