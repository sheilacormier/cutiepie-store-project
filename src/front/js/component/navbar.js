import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const MyNavbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<Navbar className="myNavbar" expand="lg">
			<Navbar.Brand className="slide-in-top" as={Link} to="/">
				<img src="https://res.cloudinary.com/scormier/image/upload/v1621447616/cutie-pie/cutie-pie_logo73x100_lojwos.png" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto slide-in-top">
					<Nav.Link as={Link} to="/">
						<i className="fas fa-home" />
					</Nav.Link>
					<Nav.Link as={Link} to="/shop_collection">
						shop collection
					</Nav.Link>
					{store.user.loggedIn ? (
						<>
							<Nav.Link as={Link} to="/profile">
								profile
							</Nav.Link>
							<Nav.Link as={Link} to="/wishlist">
								wishlist
							</Nav.Link>
							<Nav.Link as={Link} to="/" onClick={e => actions.signOut()}>
								logout
							</Nav.Link>
						</>
					) : (
						<>
							<div className="d-flex">
								<Nav.Link className="pr-2 p-lg-2" as={Link} to="/sign_in">
									sign in
								</Nav.Link>
								<div className="d-flex flex-column align-content-center justify-content-center divider">
									|
								</div>

								<Nav.Link className="p-2" as={Link} to="/register">
									register
								</Nav.Link>
							</div>
						</>
					)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
