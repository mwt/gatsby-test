import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function ComponentNav({ children }) {
    return (
        <Navbar id="navbar" expand="lg" variant="transparent">
            <Container>
                <h1><Navbar.Brand href="/">
                    <StaticQuery
                        query={graphql`query HeadingQuery { site { siteMetadata {title}}}`}
                        render={data => (
                            data.site.siteMetadata.title
                        )}
                    />
                </Navbar.Brand></h1>
                <Navbar.Toggle aria-controls="navbarNavDropdown" />
                <Navbar.Collapse id="navbarNavDropdown">
                    <Nav className="ms-auto">
                        <Nav.Link href="#top" className="active">Home</Nav.Link>
                        <Nav.Link href="#subjects">Subjects</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact-us" className="btn btn-primary" role="button">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}