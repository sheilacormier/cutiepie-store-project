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
			<Row className="align-items-center justify-content center">
				<Col xs={12} sm={5} lg={4}>
					<Nav defaultActiveKey="/home" className="flex-column profile-container">
						<h3 className="text-white align-self-center pt-1">Your User Profile</h3>
						<div className="text-white d-flex align-items-center justify-content-center">
							<img
								src="https://res.cloudinary.com/scormier/image/upload/v1620690465/cutie-pie/1452484590-sweet-baby-boy-image-screenshot_wzzhx5.jpg"
								className="rounded-circle profile-image"
								alt="User-Profile-Image"
							/>
							<h5>Welcome Back to</h5>
						</div>
						<div className="logo d-flex align-self-end">
							<img
								className="p-2"
								src="https://res.cloudinary.com/scormier/image/upload/v1620161770/cutie-pie/cp-logo_xi19ms.png"
							/>
						</div>
						<Nav.Link className="pb-1" href="/home">
							Active
						</Nav.Link>
						<Nav.Link className="pt-1" eventKey="link-1 pt-1">
							Link
						</Nav.Link>
					</Nav>
				</Col>

				<Col xs={12} sm={7} lg={6}>
					<div>
						<Form>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Your email</Form.Label>
								<Form.Control className="" type="email" placeholder="Email" />
								<Button href="#" bsPrefix="btn-addtocart" variant="warning">
									<i className="fa fa-shopping-cart" />
								</Button>
								<Form.Text className="text-muted">Update email</Form.Text>

								<Form.Label>Your password</Form.Label>
								<Form.Control className="" type="password" placeholder="Password" />
								<Form.Text className="text-muted">Update password</Form.Text>
							</Form.Group>
						</Form>
					</div>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center pb-1 my-2">
				<Col>
					<div className="hero-image-profile" />
				</Col>
			</Row>
		</Container>
	);
};
