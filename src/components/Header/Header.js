import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
// importing components from react bootstrap
import { Image } from "react-bootstrap";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// react icon
import { FaMoon, FaSun } from "react-icons/fa";
//toggle button
import { Switch } from "antd";

const Header = () => {
  //using context
  const { user, logOut } = useContext(AuthContext);

  //implementing log out
  const onLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/2729/2729012.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          {""}
          Edu Dive
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              {" "}
              <Link className="text-decoration-none text-dark" to="/">
                Home
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link className="text-decoration-none text-dark" to="/courses">
                Courses
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link className="text-decoration-none text-dark" to="/blog">
                Blog
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none text-dark" to="/faq">
                FAQ
              </Link>
            </Nav.Link>

            {/* -----------------------------------
           showing user photo and name through optional chaining 
           ----------------------------------------*/}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {user?.uid ? (
                <>
                  {user?.photoURL ? (
                    <Image
                      title={user?.displayName}
                      style={{ height: "30px", objectFit: "cover" }}
                      roundedCircle
                      src={user?.photoURL}
                    ></Image>
                  ) : (
                    <Image 
                    style={{ height: "30px", objectFit: "cover" }}
                    roundedCircle
                    src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png' title={user?.displayName}></Image>
                  )}
                  <button onClick={onLogOut} className="btn">
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    className="text-decoration-none text-dark me-2"
                    to="/login"
                  >
                    {" "}
                    Login{" "}
                  </Link>
                  <Link
                    className="text-decoration-none text-dark"
                    to="/register"
                  >
                    {" "}
                    Register{" "}
                  </Link>
                </>
              )}
            </Nav.Link>
            {/* --------
              toggle button
               -----------*/}
            {/* <Nav.Link eventKey={2} href="#memes">
              <FaSun className="text-warning"></FaSun> <Switch />{" "}
              <FaMoon></FaMoon>
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
