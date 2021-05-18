import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const MyNavbar = () => {
	return (
		<Navbar className="myNavbar" expand="lg">
			<Navbar.Brand as={Link} to="/">
				<img src="https://res.cloudinary.com/scormier/image/upload/v1620161770/cutie-pie/cp-logo_xi19ms.png" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link as={Link} to="/">
						<i className="fas fa-home" />
					</Nav.Link>
					<Nav.Link as={Link} to="/shop_collection">
						shop collection
					</Nav.Link>
					<Nav.Link as={Link} to="/sign_in">
						sign in
					</Nav.Link>
					<Nav.Link as={Link} to="/profile">
						profile
					</Nav.Link>
					<Nav.Link as={Link} to="/register">
						register
					</Nav.Link>
					<Nav.Link as={Link} to="/wishlist">
						wishlist
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
