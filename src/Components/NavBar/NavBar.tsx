import React from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useLogoutMutation, useRefreshQuery} from "../../Services/AuthApi";

const NavBar = (): JSX.Element => {
    const {data} = useRefreshQuery()
    const [logout] = useLogoutMutation()
    const navigate = useNavigate()


    const handleLogout = async () => {
        await logout()
        localStorage.clear()
        navigate('/')
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto justify-content-between">
                        <NavLink className='nav-link' to='/'>News</NavLink>
                        <NavLink className='nav-link' to='/contact'>Contact</NavLink>
                        <NavLink className='nav-link' to='/about'>About us</NavLink>
                        {data ? <NavDropdown title={data.user[0].email} id="basic-nav-dropdown">
                            <NavDropdown.Item><Link className='nav-link' to='/dashboard'>Dashboard</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link className='nav-link' to='#' onClick={() => handleLogout()}>Logout</Link></NavDropdown.Item>

                        </NavDropdown> : <Link className='nav-link' to='/logIn'>Log In</Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;