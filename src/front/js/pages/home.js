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
		e.preventDefault();
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.stopPropagation();
		} else if (form.checkValidity()) {
			let signupNewsletter = await actions.addMailingListSubscriber(email);
		}

		setValidated(true);
	};

	const handleFavoriteClick = async product => {
		// check if user is logged in, if not, short circuit this function
		if (!store.user.loggedIn) {
			actions.setAlert({
				type: "danger",
				msg: "Please login to select favorites!",
				show: true
			});
			return;
		}

		// Query product in the wishlist. This is either Undefined or a product object
		let productQuery = store.user.wishlist.find(item => item.id === product.id);

		// check if the query was undefined and either add or remove based on result
		if (typeof productQuery === "undefined") {
			await actions.addWishlist(product);
		} else {
			await actions.removeWishlist(product);
		}
	};

	return (
		<Container fluid>
			<Row className="justify-content-center align-items-center">
				<Col className="p-0">
					<div className="hero-image" />
				</Col>
			</Row>
			<Container className="my-2">
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
										<img className="product-pic" src={product.img} alt="outfit" />

										<span className="text-center">
											<i className="fa fa-rupee" /> {product.price}
										</span>
										<div className="product-action">
											<div className="product-action-style">
												<Link
													to="#"
													className={
														store.user.wishlist.find(item => item.id === product.id)
															? "wished"
															: "not-wished"
													}
													onClick={e => handleFavoriteClick(product)}>
													<i className="fa fa-heart" />
												</Link>
												<Link to={`/product_details/${index}`}>
													<i className="fas fa-search" />
												</Link>
												<a href={product.url} target="_blank" rel="noopener noreferrer">
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
			<Row className="brands-container">
				<Col xs={12}>
					{" "}
					<h2 className="brands-header text-center my-4">The Brands we love</h2>
				</Col>
				<Col xs={12} sm={6} md={4} className="py-2 d-flex justify-content-center align-items-center">
					<img
						src="https://res.cloudinary.com/scormier/image/upload/v1621811594/cutie-pie/hap5qqxogfrt7hu2page.png"
						className="brands-imgs"
					/>
				</Col>
				<Col xs={12} sm={6} md={4} className="py-3 py-sm-2 d-flex justify-content-center align-items-center">
					<img
						src="https://res.cloudinary.com/scormier/image/upload/v1621811594/cutie-pie/w00dkwzmr49jie7cgmbd.png"
						className="brands-imgs"
					/>
				</Col>
				<Col xs={12} sm={6} md={4} className="py-3 py-sm-2 d-flex justify-content-center align-items-center">
					<img
						src="https://res.cloudinary.com/scormier/image/upload/v1621973399/cutie-pie/zujfax1uv8zct6ffprko.png"
						className="brands-imgs"
					/>
				</Col>

				<Col
					xs={12}
					sm={6}
					md={4}
					className="pt-2 pb-2 pb-sm-4 d-flex justify-content-center align-items-center">
					<img
						src="https://res.cloudinary.com/scormier/image/upload/v1621811594/cutie-pie/ffphln37xkdhh5fultru.png"
						className="brands-imgs"
					/>
				</Col>
				<Col xs={12} sm={6} md={4} className="pt-2 pb-4 d-flex justify-content-center align-items-center">
					<img
						src="https://res.cloudinary.com/scormier/image/upload/v1621973412/cutie-pie/sghwfmvjoncrsolff59d.png"
						className="brands-imgs"
					/>
				</Col>
			</Row>
		</Container>
	);
};
