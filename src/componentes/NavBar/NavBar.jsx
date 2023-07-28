import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="../img/logo.png" className='imgShonen' alt="Logo IMS" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/categoria/1"> Guitarras </Nav.Link>
          <Nav.Link as={Link} to="/categoria/2"> Bajos </Nav.Link>
          <Nav.Link as={Link} to="/categoria/3"> Baterías </Nav.Link>
          <Nav.Link as={Link} to="/categoria/4"> Piano </Nav.Link>

        </Nav>
        <CartWidget />
      </Container>
    </Navbar>



  )
}
export default NavBar 