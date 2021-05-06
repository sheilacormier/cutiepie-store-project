import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="footer mt-auto py-5 text-center">
		<Container>
			<Row>
				<Col xs={12} md={8}>
					about us
				</Col>
				<Col xs={6} md={4}>
					image here
				</Col>
			</Row>
			<Row>
				<Col>cuite pie. All rights reserved 2021</Col>
			</Row>
		</Container>
	</footer>
);
