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
	return (
		<Container className="my-2">
			{store.product.length > 0 && (
				<Row className="mx-auto pt-4">
					<Col xl={6} className="justify-content-center text-center pt-2">
						<img className="large-product-pic" src={store.product[productIndex].img} />
					</Col>
					<Col xl={6} className="mx-auto pt-2">
						<div className="container-fluid">
							<h4 className="product-brand">{store.product[productIndex].brand}</h4>
							<h4 className="product-title">{store.product[productIndex].title}</h4>
							<h4 className="price">
								<span>{store.product[productIndex].price}</span>
							</h4>
							<hr />
							<div className="colors-wrapper">
								<span className="color-label">Color: {store.product[productIndex].color}</span>
								<ul className="preview-thumbnail nav nav-tabs">
									<li>
										<a href="#">
											<img src={store.product[productIndex].img} />
										</a>
									</li>
								</ul>
							</div>
							<div className="sizes-wrapper">
								<span className="size-label">Size: </span>
								<Row>
									<Col xs="auto">
										<Form.Group className="mt-3">
											<Form.Control size="sm" as="select">
												<option>{store.product[productIndex].size}</option>
											</Form.Control>
										</Form.Group>
									</Col>
								</Row>
							</div>
							<p className="product-description">{store.product[productIndex].description}</p>
							{/* <div>
							<span className="quantity-label">Quantity</span>
							<div className="mt-2">
								<input className="quantitybtn" type="button" value="-" />
								<input className="quantitynum" type="button" value="1" />
								<input className="quantitybtn" type="button" value="+" />
							</div>
						</div> */}
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
