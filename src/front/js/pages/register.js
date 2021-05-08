import React, { useContext } from "react";
import { Context } from "../store/appContext";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "../../styles/create-sign_in_account.scss";

export const Register = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container className="my-2">
			<h5 className="create-account-title text-center pt-2">REGISTER</h5>
			<Row className="mx-auto pt-4">
				<Col sm={12} md={6} lg={4} className="mx-auto">
					<Form>
						<Form.Group controlId="formGroupName">
							<Form.Control type="name" placeholder="Name" />
						</Form.Group>
						<Form.Group controlId="formGroupEmail">
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>
						<Form.Group controlId="formGroupPassword">
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
						<Form.Group controlId="formGroupSubmit">
							<Button className="w-100" type="submit">
								Submit
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