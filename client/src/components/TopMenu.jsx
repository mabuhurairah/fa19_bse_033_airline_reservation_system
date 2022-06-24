import React from "react";
import { Container,  Navbar, Nav, Button } from 'react-bootstrap';
import userLoginService from "../services/UserLoginService";


// import { Form, Modal, Button } from 'react-bootstrap';

// import { Link }  from "react-router-dom";
// import { Button } from 'react-bootstrap';
// import Button from "@mui/material/Button";

const TopMenu = () => {

    return ( <div>
        <Navbar collapseOnSelect expand="lg" bg="" variant="light" className='Navbar' fixed="top">
          <Container>
          <Navbar.Brand text-size="18" href="/"><h3>bookFlight</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/not-found">My Bookings</Nav.Link>
              <Nav.Link href="/flight-data">Flights</Nav.Link>
            </Nav>

            {userLoginService.isAdmin() && (
              <>
                <Nav>
                  <Nav.Link href="/users">Manage Users</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="/flights">Manage Flights</Nav.Link>
                </Nav>
              </>
            )}

            {!userLoginService.isLoggedIn() ? (
              <>
                <Nav>
                  <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
              </>
            ) : (
              <>
                <Nav>
                  <Nav.Link href="/user-data">My Account</Nav.Link>
                </Nav>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => {
                    userLoginService.logout();
                    window.location.reload();
                    window.location.href = "/";
                  }}
                >
                  Logout ({userLoginService.getLoggedInUser().fullName})
                </Button>
              </>
              
            )}

            <Nav>
              <Nav.Link href="/contact-us">Help</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </div> );
}
 
export default TopMenu;