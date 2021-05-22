import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "../../styles/shop_collection&wishlist.scss";

export const Wishlist = () => {
	const { store, actions } = useContext(Context);
	// let { currentUser } = useParams();

	return (
		<Container className="mb-3">
			{/* {store.wishlist.length > 0 && (
				<> */}
			<nav aria-label="page-navigation">
				<ul className="pagination justify-content-end mb-0 py-2">
					<li className="page-item">
						<a className="page-link" href="#">
							{"<<"}
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">
							1
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">
							2
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">
							3
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">
							{">>"}
						</a>
					</li>
				</ul>
			</nav>
			<h5 className="pt-2 pb-3 text-center page-title">YOUR WISHED ITEMS</h5>
			<Row className="mx-auto">
				{store.wishlist.map((item, index) => {
					return (
						<Col sm={12} md={6} lg={4} key={index}>
							<Card className="mb-3 collection-card" style={{ width: "18rem" }}>
								<Container className="p-0">
									<Button bsPrefix="btn-like" variant="warning">
										<i className="fa fa-heart" />
									</Button>
									<Card.Img className="pt-2" variant="top" src={item.img} />
									<Container className="bottom-btn-container pt-2">
										<Button href="#" bsPrefix="btn-addtocart" variant="warning">
											<i className="fa fa-shopping-cart" />
										</Button>
										<Button href="/product_details/:id" bsPrefix="btn-seedetails" variant="warning">
											<i className="fas fa-search" />
										</Button>
									</Container>
								</Container>

								<Card.Body className="text-center p-2 pb-3">
									<Card.Title className="mt-2">{item.title}</Card.Title>
									<Card.Text>{item.price}</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
			{/* </>
			)} */}
		</Container>
	);
};
