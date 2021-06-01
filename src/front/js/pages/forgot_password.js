import React, { useContext, useState, useEffect, useRef } from "react";
import { Context } from "../store/appContext";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "../../styles/register-sign_in_account.scss";

export const ForgotPassword = () => {
	const { store, actions } = useContext(Context);
	const emailRef = useRef(null);
	const [email, setEmail] = useState("");
	const [validated, setValidated] = useState(false);

	const handleSubmit = async e => {
		e.preventDefault();
		const form = e.currentTarget;

		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		} else if (form.checkValidity()) {
			let forgot = await actions.forgotPassword(email);
			console.log(forgot);
		}

		setValidated(true);
	};

	return (
		<Container className="my-2">
			<h5 className="page-title text-center pt-2">Forgot Password</h5>
			<Row className="mx-auto pt-4">
				<Col sm={12} md={6} lg={4} className="mx-auto align-items-center">
					<Form noValidate validated={validated} onSubmit={handleSubmit}>
						<Form.Group controlId="formGroupEmail">
							<Form.Control
								className="field-color"
								type="email"
								placeholder="Enter email"
								value={email}
								onChange={e => setEmail(e.target.value)}
								required
								autoComplete="on"
								ref={emailRef}
							/>
							<Form.Control.Feedback type="invalid">
								{emailRef && emailRef.current && emailRef.current.validationMessage}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group controlId="formGroupSubmit">
							<Button className="w-100" type="submit" bsPrefix="btn-signin">
								Reset Password
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
					/>
				</Col>
			</Row>
		</Container>
	);
};
