import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import {Nav, Form, Navbar, Button, FormControl} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export function NavBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>BTP TUNISIE</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link className="btn btn-outline-info mr-1" to="/">Home</Link>
                    <Link className="btn btn-outline-info mr-1" to="/moe">MOE</Link>
                    <Link className="btn btn-outline-info mr-1" to="/produits">Produits</Link>
                    <Link className="btn btn-outline-info mr-1" to="/services">Services</Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-1" />
                    <Button variant="outline-info mr-2">Search</Button>
                </Form>
                <Nav className="mr-2">
                    <Link className="btn btn-outline-info" to="/login">Login</Link>
                </Nav>
            </Navbar>
        </div>
    )
}

