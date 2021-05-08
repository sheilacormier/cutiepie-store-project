import React, { useContext } from "react";
import { Context } from "../store/appContext";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "../../styles/product_details.scss";

export const ProductDetails = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container className="my-2">
			<Row className="mx-auto pt-5">
				<Col xl={6} className="mx-auto">
					<div className="container-fluid">
						<div className="wrapper">
							<div className="preview">
								<div className="preview-pic tab-content">
									<div className="tab-pane active" id="pic-1">
										<img src="https://res.cloudinary.com/scormier/image/upload/v1620484388/cutie-pie/sample-details1_eeqkzy.png" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</Col>
				<Col xl={6} className="mx-auto">
					<div className="container-fluid">
						<div className="wrapper">
							<div className="details">
								<h4 className="product-brand">Polo Ralph Lauren</h4>
								<h4 className="product-title">Baby Boys Cotton Interlock Polo Shortall</h4>
								<h4 className="price">
									<span>$55</span>
								</h4>
								<p className="product-description">
									Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem!
									Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.
								</p>
								<h5 className="sizes">Size: dropdown here</h5>
								<h5 className="colors">
									Colors:
									<ul className="preview-thumbnail nav nav-tabs">
										<li className="active">
											<a data-target="#pic-1" data-toggle="tab">
												<img src="https://res.cloudinary.com/scormier/image/upload/v1620484388/cutie-pie/sample-details1_eeqkzy.png" />
											</a>
										</li>
									</ul>
								</h5>
								<h5 className="sizes">Quantity</h5>
								<div className="action">
									<button className="add-to-cart btn btn-default w-100" type="button">
										add to cart
									</button>
								</div>
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};
