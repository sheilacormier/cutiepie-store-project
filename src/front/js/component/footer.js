import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="footer mt-auto py-5 text-center">
		<Container>
			<Row>
				<Col xs={12} md={8}>
					<ul className="footerlinks">
						<li>
							<Link href="/">about us</Link>
						</li>
						<li>
							<Link href="/">contact us</Link>
						</li>
						<li>
							<Link href="/">terms and conditions</Link>
						</li>
						<li>
							<Link href="/">privacy policy</Link>
						</li>
					</ul>
				</Col>
				<Col xs={6} md={4}>
					<img
						src="https://res.cloudinary.com/scormier/image/upload/v1620161770/cutie-pie/footer-baby_yvxvyy.png"
						alt="baby in red"
						width="268"
						height="184"
					/>
				</Col>
			</Row>
			<Row>
				<Col>
					<span className="copyright">&copy; cutie pie. All rights reserved 2021</span>
				</Col>
			</Row>
		</Container>
	</footer>
);
