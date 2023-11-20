import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'

const NavBar = () => {

    const setActiveClass = () => isActive ? "active" : "no-active";

    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Navbar.Collapse className='justify-content-end'>
                        <Nav className='gap-2'>
                            <Nav.Link className={setActiveClass}>Home</Nav.Link>
                            <Nav.Link className={setActiveClass}>Pokemones</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar></div >
    )
}

export default Navbar