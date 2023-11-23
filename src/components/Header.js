import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="text-decoration-none text-light mx-2"><a href='https://github.com/Godfathxx/loginpage'>helpdesk</a></Nav>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light mx-2">Home</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
