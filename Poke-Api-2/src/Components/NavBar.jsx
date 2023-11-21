import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import pokeMarcador from '../Img/pokemarcador.png'

const NavBar = () => {

    const setActiveClass = ({ isActive }) => isActive ? "active" : "no-active";

    return (
        <Navbar className='navbar' expand="lg" bg="dark" variant="dark" fixed='top'>
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    <img className='pokeMarcador' src={pokeMarcador} alt="imagen de marcador de mapa pokemon" />
                </Navbar.Brand>
                <Navbar.Collapse className='justify-content-end'>
                    <Nav className='gap-2 nav-link'>
                        <NavLink  className={setActiveClass} to="/">
                            Home
                        </NavLink>
                        <NavLink className={setActiveClass} to="/pokemones">
                            Pokemones
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default NavBar