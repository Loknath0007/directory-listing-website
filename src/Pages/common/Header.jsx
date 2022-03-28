import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <div>
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                         <Navbar.Brand href="#home"><Link to="/" className='text-decoration-none'>Bikroy.com</Link></Navbar.Brand>
                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                         <Navbar.Collapse id="responsive-navbar-nav">
                         <Nav className="me-auto">
                              <Nav.Link href="#"><Link to="/" className='text-decoration-none'>All Ads</Link></Nav.Link>
                         </Nav>
                         <Nav>
                              <Nav.Link href='#'><Link to="/login" className='text-decoration-none'>Login</Link></Nav.Link>
                              <Button variant="primary">post your add</Button>
                         </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div>
     );
};

export default Header;