import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "../../styles/home_cards.scss";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container className="my-2">
			<Row className="mx-auto">
				<Col sm={12}>
					<Jumbotron fluid className="jumbotron" />
				</Col>
			</Row>
			<Row className="mx-auto">
				<Col sm={12} md={6} lg={4}>
					<div className="container d-flex justify-content-center mt-100">
						<div className="row">
							<div>
								<div className="product-wrapper mb-45 text-center">
									<div className="product-img">
										<a href="#" data-abc="true">
											<img
												src="https://res.cloudinary.com/scormier/image/upload/v1620334490/cutie-pie/outfit1_l8oaq2.png"
												alt=""
											/>
										</a>
										<span className="text-center">
											<i className="fa fa-rupee" /> $24.99
										</span>
										<div className="product-action">
											<div className="product-action-style">
												<a href="#">
													<i className="fa fa-heart" />
												</a>
												<a href="#">
													<i className="fa fa-shopping-cart" />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Col>
				<Col sm={12} md={6} lg={4}>
					<div className="container d-flex justify-content-center mt-100">
						<div className="row">
							<div>
								<div className="product-wrapper mb-45 text-center">
									<div className="product-img">
										<a href="#" data-abc="true">
											<img
												src="https://res.cloudinary.com/scormier/image/upload/v1620334490/cutie-pie/outfit2_hdw0oc.png"
												alt=""
											/>
										</a>
										<span className="text-center">
											<i className="fa fa-rupee" /> $34.99
										</span>
										<div className="product-action">
											<div className="product-action-style">
												<a href="#">
													<i className="fa fa-heart" />
												</a>
												<a href="#">
													<i className="fa fa-shopping-cart" />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Col>
				<Col sm={12} md={6} lg={4}>
					<div className="container d-flex justify-content-center mt-100">
						<div className="row">
							<div>
								<div className="product-wrapper mb-45 text-center">
									<div className="product-img">
										<a href="#" data-abc="true">
											<img
												src="https://res.cloudinary.com/scormier/image/upload/v1620334490/cutie-pie/outfit3_wco9ga.png"
												alt=""
											/>
										</a>
										<span className="text-center">
											<i className="fa fa-rupee" /> $14.99
										</span>
										<div className="product-action">
											<div className="product-action-style">
												<a href="#">
													<i className="fa fa-heart" />
												</a>
												<a href="#">
													<i className="fa fa-shopping-cart" />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Col>
			</Row>

			<Row>
				<Col xs={12} md={8}>
					<img
						src="https://res.cloudinary.com/scormier/image/upload/v1620161770/cutie-pie/heart-large_trfvou.png"
						alt="heart"
						width="37"
						height="34"
					/>
					<div className="subscribetext">Join our family! Subscribe to our newsletter</div>
					<div className="subscribetext">Promotions, new products and sales directly to your inbox.</div>
					<Form>
						<Form.Row className="align-items-center">
							<Col sm={5} className="my-1">
								<Form.Control id="inlineFormInputName" placeholder="youremail@gmail.com" />
							</Col>
							<Col xs="auto" className="my-1">
								<Button type="submit">Submit</Button>
							</Col>
						</Form.Row>
					</Form>
				</Col>
				<Col xs={6} md={4}>
					<img
						src="https://res.cloudinary.com/scormier/image/upload/v1620330098/cutie-pie/model-baby2_bmnh66.png"
						alt="Baby in red"
						width="200"
						height="304"
					/>
				</Col>
			</Row>
		</Container>
	);
};
