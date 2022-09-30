import "../assets/logos/SmINDUMENTARIA.png"
import "../app/styles.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import React from 'react'
const NavBar = () => {
    return (

        <header>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>SM Indumentaria</Navbar.Brand>
                        <Nav className="me-auto">

                            <Nav.Link>
                                <Link to="/">
                                    Inicio
                                </Link>
                            </Nav.Link>


                            <Nav.Link>
                                Productos
                            </Nav.Link>



                            <Nav.Link>
                                <Link to="/categorias">
                                    Categorias
                                </Link>
                            </Nav.Link>

                            <CartWidget />
                        </Nav>
                    </Container>
                </Navbar>

            </>
        </header>
    )
}

export default NavBar;