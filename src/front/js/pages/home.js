import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container className="my-3">
			<Row className="mx-auto">
				<Col sm={12}>
					<Image
						src="https://res.cloudinary.com/scormier/image/upload/v1620161770/cutie-pie/model-baby_tcmmus.jpg"
						fluid
					/>
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={8}>
					Subscribe goes here
				</Col>
				<Col xs={6} md={4}>
					image here
				</Col>
			</Row>
		</Container>
	);
};
