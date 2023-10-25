import { Container, Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Container className="mt-4">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>ALL ABOUT UP TO DATE NEWS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Events</Nav.Link>
            <Nav.Link href="#">Contacs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
    );
}

export default Header;
