import React, { useContext } from "react";
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
	const [type, setType] = useState(undefined);
	const [currentID, setCurrentID] = useState(undefined);

	return (
		<Container className="my-2">
			{typeof type !== "undefined" &&
				typeof currentID !== "undefined" &&
				store[type].length > 0 && (
					<>
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
											<h4 className="product-brand">{store[type][currentID].brand}</h4>
											<h4 className="product-title">{store[type][currentID].title}</h4>
											<h4 className="price">
												<span>{store[type][currentID].price}</span>
											</h4>
											<hr />
											<div className="colors-wrapper">
												<span className="color-label">
													Color: {store[type][currentID].color}
												</span>
												<ul className="preview-thumbnail nav nav-tabs">
													<li className="active">
														<a>
															<img src="https://res.cloudinary.com/scormier/image/upload/v1620484388/cutie-pie/sample-details1_eeqkzy.png" />
														</a>
													</li>
												</ul>
											</div>
											<div className="sizes-wrapper">
												<span className="size-label">Size: {store[type][currentID].size}</span>
												<Row>
													<Col xs="auto">
														<Form.Group className="mt-3">
															<Form.Control size="sm" as="select">
																<option>0-3 months</option>
																<option>3-6 months</option>
																<option>6-12 months</option>
															</Form.Control>
														</Form.Group>
													</Col>
												</Row>
											</div>
											<div className="quantity-wrapper">
												<span className="quantity-label">Quantity</span>
												<div className="mt-2">
													<input className="quantitybtn" type="button" value="-" />
													<input className="quantitynum" type="button" value="1" />
													<input className="quantitybtn" type="button" value="+" />
												</div>
											</div>
											<div>
												<button className="add-to-cart btn btn-default w-100" type="button">
													add to cart
												</button>
											</div>
										</div>
									</div>
								</div>
							</Col>
						</Row>
						<Row>
							<Col xl={12} className="mt-4 mp-4">
								<p className="product-description">
									Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem!
									Repudiandae et! Massa senectus enim minim sociosqu delectus posuere. Suspendisse
									quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et!
									Massa senectus enim minim sociosqu delectus posuere. Suspendisse quos? Tempus cras
									iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim
									minim sociosqu delectus posuere. Suspendisse quos? Tempus cras iure temporibus? Eu
									laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu
									delectus posuere.
								</p>
							</Col>
						</Row>
					</>
				)}
		</Container>
	);
};
