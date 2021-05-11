import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "../../styles/navbar.scss";

export const MyNavbar = () => {
	return (
		<Navbar className="myNavbar" expand="lg">
			<Navbar.Brand href="/">
				<img src="https://res.cloudinary.com/scormier/image/upload/v1620161770/cutie-pie/cp-logo_xi19ms.png" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="/">home</Nav.Link>
					<Nav.Link href="/shop_collection">shop collection</Nav.Link>
					<Nav.Link href="/sign_in">sign in</Nav.Link>
					<Nav.Link href="/profile_copy">profile</Nav.Link>
					<Nav.Link href="/register">register</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
