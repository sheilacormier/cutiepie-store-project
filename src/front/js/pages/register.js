import React, { useContext, useState, useEffect, useRef } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "../../styles/create-sign_in_account.scss";

export const Register = () => {
	const { store, actions } = useContext(Context);
	const emailRef = useRef(null);
	const passRef = useRef(null);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [validated, setValidated] = useState(false);

	const handleSubmit = async e => {
		e.preventDefault();
		const form = e.currentTarget;

		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		} else if (form.checkValidity()) {
			let signin = await actions.register(email, password);
		}

		setValidated(true);
	};
	return (
		<Container className="my-2">
			<h5 className="create-account-title text-center pt-2">REGISTER</h5>
			<Row className="mx-auto pt-4">
				<Col sm={12} md={6} lg={4} className="mx-auto">
					<Form noValidate validated={validated} onSubmit={handleSubmit}>
						<Form.Group controlId="formGroupEmail">
							<Form.Control
								required
								autoComplete="on"
								type="email"
								placeholder="Enter email"
								value={email}
								onChange={e => setEmail(e.target.value)}
								ref={emailRef}
							/>
							<Form.Control.Feedback type="invalid">
								{emailRef && emailRef.current && emailRef.current.validationMessage}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group controlId="formGroupPassword">
							<Form.Control
								required
								autoComplete="on"
								type="password"
								placeholder="Password"
								value={password}
								onChange={e => setPassword(e.target.value)}
								ref={passRef}
							/>
							<Form.Control.Feedback type="invalid">
								{passRef && passRef.current && passRef.current.validationMessage}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group controlId="formGroupSubmit">
							<Button className="w-100" type="submit" bsPrefix="btn-signin">
								Submit
								<span />
								<span />
								<span />
								<span />
							</Button>
						</Form.Group>
						<p>
							Already have an account? <Link to="/sign_in">click here</Link> to login.
						</p>
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
