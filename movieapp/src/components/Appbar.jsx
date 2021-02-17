import { Button } from 'bootstrap';
import React from 'react';
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const Appbar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Movie App</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Movies</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    {/* <Button variant="outline-light">Search</Button> */}
                </Form>
            </Navbar>
        </div>
    )
}

export default Appbar;