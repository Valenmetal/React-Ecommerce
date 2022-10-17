import logo from '../../assets/logos/SmINDUMENTARIA.png'

import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (

        <header>
            <Navbar fixed='top' className="navbar w-100 m-0" bg="black" variant="dark">
                <Navbar.Brand href="/" className='ms-5'>
                    <Link className="link" to="/">
                        <img
                            src={logo}
                            width="80"
                            height="80"
                            alt="Logo"
                        />
                    </Link>
                </Navbar.Brand>
                <Nav>

                    <Nav.Link className="me-auto">
                        <Link className="nav-link" to="/">
                            Inicio
                        </Link>
                    </Nav.Link>

                    <Nav.Link className="me-auto">
                        <Link className="nav-link" to="/categorias">
                            Categorias
                        </Link>
                    </Nav.Link>

                </Nav>
                <Nav className='me-5'>
                    <CartWidget />

                </Nav>
            </Navbar>

        </header>
    )
}

export default NavBar;