// import React, { useContext } from "react";
// import { Context } from "../store/appContext";

// import Form from "react-bootstrap/Form";
// import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import "../../styles/profile.scss";

// export const Profile = () => {
// 	const { store, actions } = useContext(Context);

// 	return (
// 		<Container className=" my-2">
// 			<Row className="profile-container align-items-center justify-content center p-2">
// 				<Col xs={12} sm={5} lg={6} className="px-1">
// 					<Nav defaultActiveKey="/home" className="flex-column">
// 						<h3 className="text-dark">Your User Profile</h3>
// 						<div className="text-dark d-flex align-items-center justify-content-center">
// 							<img
// 								src="https://res.cloudinary.com/scormier/image/upload/v1620690465/cutie-pie/1452484590-sweet-baby-boy-image-screenshot_wzzhx5.jpg"
// 								className="mx-2 rounded-circle profile-image"
// 								alt="User-Profile-Image"
// 							/>
// 							<h5>Welcome Back</h5>
// 						</div>
// 						<Nav.Link className="pb-1" href="/home">
// 							Active
// 						</Nav.Link>
// 						<Nav.Link className="pt-1" eventKey="link-1 pt-1">
// 							Link
// 						</Nav.Link>
// 					</Nav>
// 				</Col>

// 				<Col xs={12} sm={7} lg={6} className="px-1">
// 					<div>
// 						<Form>
// 							<Form.Group controlId="formBasicEmail" className="p-2">
// 								<Form.Label>Your email</Form.Label>
// 								<div className="d-flex align-items-center">
// 									<Form.Control className="" type="email" placeholder="Email" />
// 									<Button href="#" bsPrefix="btn-update-email btn-rounded" variant="warning">
// 										Update Email
// 									</Button>
// 								</div>

// 								<Form.Label>Your password</Form.Label>
// 								<div className="d-flex align-items-center">
// 									<Form.Control className="" type="password" placeholder="Password" />
// 									<Button href="#" bsPrefix="btn-update-password" variant="warning">
// 										Update Password
// 									</Button>
// 								</div>
// 							</Form.Group>
// 						</Form>
// 					</div>
// 				</Col>
// 			</Row>
// 			<Row className="justify-content-center align-items-center pb-1 my-2">
// 				<Col>
// 					<div className="hero-image-profile" />
// 				</Col>
// 			</Row>
// 		</Container>
// 	);
// };
