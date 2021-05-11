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
		<Container className=" my-2">
			<Row>
				<Col>
					<div className="d-flex flex-column profile-container p-2">
						<h3 className="text-dark text-center">Your User Profile</h3>
						<img
							src="https://res.cloudinary.com/scormier/image/upload/v1620690465/cutie-pie/1452484590-sweet-baby-boy-image-screenshot_wzzhx5.jpg"
							className=" align-self-center mx-2 rounded-circle profile-image"
							alt="User-Profile-Image"
						/>
						<Form>
							<Form.Group controlId="formBasicEmail" className="py-2 mb-0">
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
		</Container>
	);
};
