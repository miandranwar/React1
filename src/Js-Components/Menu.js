import React from 'react';
import '../Style/App.scss';
import { Navbar, Nav } from 'react-bootstrap';


const Menu = () => {
    return (
        <div>
            <Navbar  variant="dark" fixed ="top" className="menu">
            <Navbar.Brand href="#home">Flix</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Navbar>
        </div>
    );
}

export default Menu;
