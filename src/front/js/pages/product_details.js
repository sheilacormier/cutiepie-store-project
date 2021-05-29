import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "../../styles/product_details.scss";

export const ProductDetails = () => {
	const { store, actions } = useContext(Context);

	let { productIndex } = useParams();
	let products = store.product;
	let selectedProduct = store.product.length > 0 && store.product[productIndex];
	const [selectedimage, setSelectedimage] = useState("");
	useEffect(
		() => {
			if (store.product.length > 0) setSelectedimage(store.product[productIndex].img);
		},
		[products]
	);

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
		<Container className="my-2 mb-5">
			{store.product.length > 0 && (
				<Container>
					<Row className="mx-auto pt-4 mb-5">
						<Col xl={6} className="large-product-pic justify-content-center text-center pt-2">
							<img className="large-product-pic" src={selectedimage} />
						</Col>
						<Col xl={6} className="mx-auto pt-2">
							<div className="container-fluid">
								<h4 className="product-brand">{store.product[productIndex].brand}</h4>
								<h4 className="product-title">{store.product[productIndex].title}</h4>
								<h4 className="product-price">
									<span>{store.product[productIndex].price}</span>
								</h4>
								<hr />
								<Row className="colors-wrapper">
									<Col xs={12} className="color-label">
										COLOR
									</Col>
									<Col className="d-flex">
										{typeof selectedProduct !== "undefined"
											? selectedProduct.colors.map((variant, index) => {
													return (
														<div className="d-flex mr-3 " key={index}>
															<div className="d-flex flex-column mt-2">
																<Link
																	to="#"
																	onClick={e => setSelectedimage(variant.img)}
																	className="p-1 thumb-product-pic">
																	<img src={variant.img} />
																</Link>
																<p className="text-center color mt-1">
																	{" "}
																	{variant.color}
																</p>
															</div>
														</div>
													);
											  })
											: "No Variants Available"}
									</Col>
								</Row>
								<div className="sizes-wrapper">
									<span className="size-label">SIZE</span>
									<Row>
										<Col xs="auto">
											<Form.Group className="mt-2">
												<Form.Control size="sm" as="select">
													{typeof selectedProduct !== "undefined" ? (
														selectedProduct.sizes.map((variant, index) => {
															return <option key={index}>{variant.size}</option>;
														})
													) : (
														<option> No Sizes Available</option>
													)}
												</Form.Control>
											</Form.Group>
										</Col>
									</Row>
								</div>
								<hr />
								<span className="description-label">WHY WE LOVE THIS PIECE</span>
								<p className="product-description">{store.product[productIndex].description}</p>
								<Row>
									<Button
										href={store.product[productIndex].url}
										bsPrefix="add-to-cart"
										className="col mr-2 p-2 p-sm-4 add-to-cart btn btn-default d-flex justify-content-center align-items-center"
										type="button"
										target="_blank">
										buy now
									</Button>

									<Button
										type="button"
										bsPrefix="add-to-cart"
										className={
											store.user.wishlist.find(item => item.id === selectedProduct.id)
												? "wished col p-2 p-sm-4 add-to-cart btn btn-default"
												: "not-wished col p-2 p-sm-4 add-to-cart btn btn-default"
										}
										onClick={e => handleFavoriteClick(selectedProduct)}>
										add to wishlist
									</Button>
								</Row>
							</div>
						</Col>
					</Row>
					<Row>
						{/* You also might like section starts here*/}
						<Col xs={12} className="mt-5 mb-3 d-flex justify-content-center align-items-center">
							<h2 className="suggestions text-center">YOU MIGHT ALSO LIKE</h2>
						</Col>

						{store.homeCards.map((product, index) => {
							return (
								<Col
									sm={12}
									md={6}
									lg={3}
									key={index}
									className="d-flex justify-content-center align-items-center">
									<div className="product-wrapper my-4 text-center">
										<div className="product-img-profile">
											<img className="product-pic" src={product.img} alt="outfit" />
											<div className="product-action">
												<div className="product-action-style-profile">
													<Button
														href={product.url}
														target="_blank"
														bsPrefix="btn-addtocart"
														variant="warning">
														<i className="fa fa-shopping-cart fa-lg" />
													</Button>
												</div>
											</div>
										</div>
									</div>
								</Col>
							);
						})}
					</Row>
				</Container>
			)}
		</Container>
	);
};
