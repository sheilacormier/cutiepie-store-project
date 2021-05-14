import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "../../styles/create-sign_in_account.scss";

export const SignIn = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [validated, setValidated] = useState(false);

	const handleSubmit = () => {
		if (email !== "" && password !== "") {
			actions.signIn(email, password);
		}
	};

	useEffect(
		() => {
			if (validated) handleSubmit();
		},
		[validated]
	);

	const validateForm = e => {
		e.preventDefault();
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		} else if (form.checkValidity() && email !== "" && password !== "") {
			setValidated(true);
		}
	};

	return (
		<Container className="my-2">
			<h5 className="create-account-title text-center pt-2">SIGN IN</h5>
			<Row className="mx-auto pt-4">
				<Col sm={12} md={6} lg={4} className="mx-auto align-items-center">
					<Form noValidate validated={validated} onSubmit={validateForm}>
						<Form.Group controlId="formGroupEmail">
							<Form.Control
								type="email"
								placeholder="Enter email"
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="formGroupPassword">
							<Form.Control
								type="password"
								placeholder="Password"
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="formGroupSubmit">
							<Button className="w-100" type="submit" bsPrefix="btn-signin">
								Sign in
								<span />
								<span />
								<span />
								<span />
							</Button>
						</Form.Group>
						<Form.Group controlId="formGroupPasswordReminder">
							<Button className="w-100" type="submit" bsPrefix="btn-signin">
								Forgot your password?
								<span />
								<span />
								<span />
								<span />
							</Button>
						</Form.Group>
					</Form>
				</Col>
				<Col sm={12} className="mx-auto">
					<img
						className="img-fluid"
						src="https://res.cloudinary.com/scormier/image/upload/v1620161769/cutie-pie/buttlerfly-path_aycx2b.png"
						alt="butterfly"
						w-100
					/>
				</Col>
			</Row>
		</Container>
	);
};
