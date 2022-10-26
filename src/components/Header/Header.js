import React, { useContext } from 'react';
// importing components from react bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {

  //using context
  const {user} = useContext(AuthContext)
    return (
        
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
      <Container>
        <Navbar.Brand href="#home">
        <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/2729/2729012.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            /> {''}
            Edu Dive
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> <Link  className='text-decoration-none text-dark'  to='/'>Home</Link> </Nav.Link>
            <Nav.Link> <Link className='text-decoration-none text-dark' to='/courses'>Courses</Link> </Nav.Link>
            <Nav.Link> <Link className='text-decoration-none text-dark' to='/blog'>Blog</Link></Nav.Link>
            <Nav.Link><Link className='text-decoration-none text-dark' to='/faq'>FAQ</Link></Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
               ON/OFF         </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    );
};

export default Header;