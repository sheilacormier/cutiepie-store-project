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
							<Card className="mb-3" style={{ width: "18rem" }}>
								<Container className="card-top-container">
									<Card.Img variant="top" src={item.img} />
									<Button className="btn-circle" variant="warning">
										Go
									</Button>
									<Button className="btn-long" variant="primary">
										Go
									</Button>
								</Container>

								<Card.Body>
									<Card.Title>{item.h1}</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the
										cards content.
									</Card.Text>
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
