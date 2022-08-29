import "../assets/logos/SmINDUMENTARIA.png"
import "../app/styles.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (

        <header>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">SM Indumentaria</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#features">Productos</Nav.Link>
                            <Nav.Link href="#pricing">Faqs</Nav.Link>


                            <CartWidget />
                        </Nav>
                    </Container>
                </Navbar>

            </>
        </header>
    )
}

export default NavBar;