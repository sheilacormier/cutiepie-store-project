import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "../../styles/shop_collection.scss";

export const ShopCollection = () => {
	const { store, actions } = useContext(Context);
	return (
		<Container className="my-3">
			<Row className="mx-auto">
				{store.shopCollection.map((item, index) => {
					return (
						<Col sm={12} md={6} lg={4} key={index}>
							<Card className="mb-3 collection-card" style={{ width: "18rem" }}>
								<Container className="p-0">
									<Button className="btn-like" variant="warning">
										Go
									</Button>
									<Card.Img variant="top" src={item.img} />
									<Container className="bottom-btn-container">
										<Button className="btn-addtocart" variant="warning">
											Go
										</Button>
										<Button className="btn-seedetails" variant="warning">
											Go
										</Button>
									</Container>
								</Container>

								<Card.Body className="text-center">
									<Card.Title className="mt-3">{item.h1}</Card.Title>
									<Card.Text>Price: $300</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

// Single.propTypes = {
// 	match: PropTypes.object
// };
