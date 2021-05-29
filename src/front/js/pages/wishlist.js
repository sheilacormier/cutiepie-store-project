import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { MyPagination } from "../component/pagination";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "../../styles/shop_collection&wishlist.scss";

export const Wishlist = () => {
	const { store, actions } = useContext(Context);
	const handleFavoriteClick = async product => {
		// check if user is logged in, if not, short circuit this function
		if (!store.user.loggedIn) {
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
		<Container className="mb-3">
			<h5 className="pt-2 pb-3 text-center page-title">
				{store.user.wishlist.length > 0 ? "YOUR WISHED ITEMS" : "NO ITEMS ADDED TO WISHLIST"}
			</h5>
			<Row className="mx-auto">
				{store.user.wishlist.map((product, index) => {
					return (
						<Col sm={12} md={6} lg={4} key={index}>
							<Card className="mb-3 collection-card" style={{ width: "18rem" }}>
								<Container className="p-0">
									<Button
										bsPrefix="btn-like"
										variant="warning"
										className={
											store.user.wishlist.find(item => item.id === product.id)
												? "wished"
												: "btn-like"
										}
										onClick={e => handleFavoriteClick(product)}>
										<i className="fa fa-heart" />
									</Button>
									<Card.Img className="pt-2" variant="top" src={product.img} />
									<Container className="bottom-btn-container pt-2">
										<Button href={product.url} bsPrefix="btn-addtocart" variant="warning">
											<i className="fa fa-shopping-cart fa-lg" />
										</Button>
										<Button
											as={Link}
											to={`/product_details/${index}`}
											bsPrefix="btn-seedetails"
											variant="warning">
											<i className="fas fa-search fa-lg" />
										</Button>
									</Container>
								</Container>

								<Card.Body className="text-center p-2 pb-3">
									<Card.Title className="mt-2">{product.title}</Card.Title>
									<Card.Text>{product.price}</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
			<MyPagination data={store.shopCollection} pageSize={9} setSelected={setSelectedData} />
		</Container>
	);
};
