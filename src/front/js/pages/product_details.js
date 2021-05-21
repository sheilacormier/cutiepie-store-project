import React, { useContext, useState } from "react";
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
	let variants = store.product.length > 0 && store.product[productIndex].variants;
	const [toggled, setToggled] = useState("");
	const toggleImage = () => setToggled(!toggled);

	return (
		<Container className="my-2 mb-5">
			{store.product.length > 0 && (
				<Row className="mx-auto pt-4">
					<Col xl={6} className="large-product-pic justify-content-center text-center pt-2">
						{toggled !== undefined && (
							<img className="large-product-pic" src={store.product[productIndex].img} />
						)}
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
								<Col>
									<span className="color-label">Color:</span>
									<Row>
										{variants.length > 0
											? variants.map((variant, index) => {
													return (
														<Col
															className="d-flex flex-column align-items-center mt-2"
															key={index}>
															<Link
																to="#"
																// onClick={() => setToggled(index)}
																onClick={toggleImage}
																// onClick={e => e.preventDefault()}
																className="thumb-product-pic">
																<img src={variant.img} />
															</Link>
															<br />
															<p className="color mt-1"> {variant.color}</p>
														</Col>
													);
											  })
											: "No Variants Available"}
									</Row>
								</Col>
							</Row>
							<div className="sizes-wrapper">
								<span className="size-label">Size:</span>
								<Row>
									<Col xs="auto">
										<Form.Group className="mt-2">
											<Form.Control size="sm" as="select">
												{variants.length > 0 ? (
													variants.map((variant, index) => {
														return <option key={index}>{variant.size}</option>;
													})
												) : (
													<option>No Sizes Available</option>
												)}
											</Form.Control>
										</Form.Group>
									</Col>
								</Row>
							</div>
							<p className="product-description">{store.product[productIndex].description}</p>
							<div>
								<Button
									href={store.product[productIndex].url}
									className="add-to-cart btn btn-default w-100"
									type="button"
									target="_blank">
									buy now
								</Button>
							</div>
						</div>
					</Col>
				</Row>
			)}
		</Container>
	);
};
