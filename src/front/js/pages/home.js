import React, { useContext, useState, useRef } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
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
	const [email, setEmail] = useState("");
	const emailRef = useRef(null);
	const [validated, setValidated] = useState(false);

	const handleSubmit = async e => {
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		} else if (form.checkValidity()) {
			let signupNewsletter = await actions.newsletter(email);
		}

		setValidated(true);
	};

	return (
		<Container className="my-2">
			<Row className="justify-content-center align-items-center">
				<Col>
					<div className="hero-image" />
				</Col>
			</Row>

			<Row>
				{store.homeCards.map((product, index) => {
					return (
						<Col
							sm={12}
							md={6}
							lg={3}
							key={index}
							className="d-flex justify-content-center align-items-center">
							<div className="product-wrapper my-4 text-center">
								<div className="product-img">
									<a href={product.url} data-abc="true">
										<img className="product-pic" src={product.img} alt="outfit" />
									</a>
									<span className="text-center">
										<i className="fa fa-rupee" /> {product.price}
									</span>
									<div className="product-action">
										<div className="product-action-style">
											<Link to="#" onClick={() => actions.addWishlist(product)}>
												<i className="fa fa-heart" />
											</Link>
											<Link to={`/product_details/${index}`}>
												<i className="fas fa-search" />
											</Link>
<<<<<<< HEAD
											<a href={product.url}>
=======
											<a href={product.url} target="_blank" rel="noopener noreferrer">
>>>>>>> b2a03ebe67bd5d2c9befcc91e4997250d28ed82d
												<i className="fa fa-shopping-cart" />
											</a>
										</div>
									</div>
								</div>
							</div>
						</Col>
					);
				})}
			</Row>
			<Row>
				<Col xs={12} md={4} className="my-3">
					<div>
						<img
							src="https://res.cloudinary.com/scormier/image/upload/v1620161770/cutie-pie/heart-large_trfvou.png"
							alt="heart"
							width="37"
							height="34"
						/>
					</div>
					<span className="subscribetext">Join our family! Subscribe to our newsletter.</span>
					<Form noValidate validated={validated} onSubmit={handleSubmit}>
						<Form.Row>
							<Col xs="auto" className="w-100 justify-content-center align-items-center my-1">
								<Form.Control
									id="inlineFormInputName"
									placeholder="youremail@gmail.com"
									type="email"
									value={email}
									required
									autoComplete="on"
									onChange={e => setEmail(e.target.value)}
									ref={emailRef}
								/>
								<Form.Control.Feedback type="invalid">
									{email && emailRef.current && emailRef.current.validationMessage}
								</Form.Control.Feedback>
							</Col>
							<Col xs="auto" className="my-1">
								<Button type="submit" bsPrefix="btn-signup-newsletter">
									Sign Up
									<span />
									<span />
									<span />
									<span />
								</Button>
							</Col>
						</Form.Row>
					</Form>
				</Col>
				<Col xs={12} md={8}>
					<img
						className="img-fluid"
						src="https://res.cloudinary.com/scormier/image/upload/v1620405014/cutie-pie/model-babies_ujsoxh.png"
						alt="Baby model"
						width="734"
						height="408"
					/>
				</Col>
			</Row>
		</Container>
	);
};
