import React, { useContext } from "react";
import { Context } from "../store/appContext";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "../../styles/profile.scss";

export const Profile = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container className=" my-2">
			<Container>
				<Row className="py-2">
					<Col md={2} className="profile-container">
						<div>
							<div className="card-block text-center text-white">
								<div className="">
									{" "}
									<img
										src="https://img.icons8.com/bubbles/100/000000/user.png"
										className="img-radius"
										alt="User-Profile-Image"
									/>{" "}
								</div>
								<h6 className="f-w-600">Hembo Tingor</h6>
								<p>Web Designer</p>{" "}
								<i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
							</div>
						</div>
					</Col>

					<Col md={10}>
						<Form>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
								<Form.Text className="text-muted">
									Well never share your email with anyone else.
								</Form.Text>
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
								<Form.Text className="text-muted">
									Well never share your email with anyone else.
								</Form.Text>
							</Form.Group>
						</Form>
					</Col>
				</Row>
			</Container>
			<Row className="justify-content-center align-items-center pb-1 my-2">
				<Col>
					<div className="hero-image-profile" />
				</Col>
			</Row>
		</Container>
	);
};
