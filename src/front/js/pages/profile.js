import React, { useContext } from "react";
import { Context } from "../store/appContext";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "../../styles/profile.scss";

export const Profile = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container className="my-1">
			<Row className="mx-auto align-items-center justify-content-center mt-2">
				<Col xs={12} md={6} className="p-0">
					<div className="d-flex flex-column profile-container p-2">
						<h3 className="text-center">Your User Profile</h3>
						<img
							src="https://res.cloudinary.com/scormier/image/upload/v1620690465/cutie-pie/1452484590-sweet-baby-boy-image-screenshot_wzzhx5.jpg"
							className=" align-self-center m-2 rounded-circle profile-image"
							alt="User-Profile-Image"
						/>
						<Button className="align-self-center" bsPrefix="btn-upload-photo" variant="warning">
							Upload photo
						</Button>

						<Nav className="flex-column">
							<Nav.Link className="p-1" href="/wishlist">
								my wishlist
							</Nav.Link>
							<Nav.Link className="p-1" eventKey="link-1">
								logout
							</Nav.Link>
						</Nav>
					</div>
				</Col>
				<Col xs={12} md={6} className="p-0">
					<div className="profile-container p-2 d-flex flex-column">
						<Form>
							<h3 className="text-center">Login Information</h3>
							<Form.Group controlId="formBasicEmail" className=" mx-2 pt-1 mb-0">
								<div className="d-flex flex-column">
									<Form.Control className="" type="email" placeholder="Email" />

									<Button className="align-self-end" bsPrefix="btn-update-email" variant="warning">
										Update Email
									</Button>
								</div>

								<div className="d-flex flex-column">
									<Form.Control className="" type="password" placeholder="Password" />

									<Button className="align-self-end" bsPrefix="btn-update-password" variant="warning">
										Update Password
									</Button>
								</div>
							</Form.Group>
						</Form>
					</div>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center my-4">
				<Col>
					<div className="hero-image-profile" />
				</Col>
			</Row>
		</Container>
	);
};
