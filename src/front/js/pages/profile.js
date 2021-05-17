import React, { useContext, useState, useRef } from "react";
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
	const emailRef = useRef(null);
	const passRef = useRef(null);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [validated, setValidated] = useState(false);

	const handleEmailSubmit = async e => {
		e.preventDefault();
		const form = e.currentTarget;

		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		} else if (form.checkValidity()) {
			let updateEmail = await actions.updateEmail(email);
		}

		setValidated(true);
	};

	const handlePassSubmit = async e => {
		e.preventDefault();
		const form = e.currentTarget;

		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		} else if (form.checkValidity()) {
			let updatePassword = await actions.updatePassword(password);
		}

		setValidated(true);
	};
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
						<Button
							type="submit"
							className="align-self-center mt-1"
							bsPrefix="btn-upload-photo"
							variant="warning">
							Upload photo
						</Button>

						<Nav className="justify-content-between">
							<Nav.Link className="py-1 px-2" href="/wishlist">
								my wishlist
							</Nav.Link>
							<Nav.Link className="py-1 px-2" eventKey="link-1">
								logout
							</Nav.Link>
						</Nav>
					</div>
				</Col>
				<Col xs={12} md={6} className="p-0">
					<div className="profile-container p-2 d-flex flex-column">
						<Form noValidate validated={validated} onSubmit={handleEmailSubmit}>
							<h3 className="text-center">Login Information</h3>
							<Form.Group controlId="formBasicEmail" className=" mx-2 pt-1 mb-0">
								<div className="d-flex flex-column">
									<Form.Control
										type="email"
										value={email}
										placeholder="Email"
										required
										onChange={e => setEmail(e.target.value)}
										ref={emailRef}
									/>
									<Form.Control.Feedback type="invalid">
										{emailRef && emailRef.current && emailRef.current.validationMessage}
									</Form.Control.Feedback>

									<Button
										type="submit"
										className="align-self-end"
										bsPrefix="btn-update-email"
										variant="warning">
										Update Email
									</Button>
								</div>
							</Form.Group>
						</Form>

						{/* <div className="d-flex flex-column">
									<Form.Control type="password" placeholder="Current Password" required />

									<Button
										type="submit"
										className="align-self-end"
										bsPrefix="btn-update-password"
										variant="warning">
										Update Password
									</Button>
								</div> */}
						<Form noValidate validated={validated} onSubmit={handlePassSubmit}>
							<Form.Group controlId="formPassword" className=" mx-2 pt-1 mb-0">
								<div className="d-flex flex-column">
									<Form.Control
										type="password"
										value={password}
										placeholder="New Password"
										required
										onChange={e => setPassword(e.target.value)}
										ref={passRef}
									/>

									<Form.Control.Feedback type="invalid">
										{passRef && passRef.current && passRef.current.validationMessage}
									</Form.Control.Feedback>

									<Button
										type="submit"
										className="align-self-end"
										bsPrefix="btn-update-password"
										variant="warning">
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
