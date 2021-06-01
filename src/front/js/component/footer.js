import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="footer py-5 text-center">
		<Container>
			<Row>
				<Col xs={12} md={8}>
					<ul className="footerlinks">
						<li>
							<Link to="/our_story">about us</Link>
						</li>
						<li>
							<Link to="/our_story">contact us</Link>
						</li>
						<li>
							<Link to="/terms_conditions">terms and conditions</Link>
						</li>
						<li>
							<Link to="/privacy_policy">privacy policy</Link>
						</li>
					</ul>
					<ul className="socialmediaicons">
						<span className="connect">LET&apos;S CONNECT</span>
						<li>
							<Link to="#">
								<img
									src="https://res.cloudinary.com/scormier/image/upload/v1622570819/cutie-pie/rj4vvr2vypfifnx6huvc.png"
									alt="pinterest"
									width="40"
									height="40"
								/>
							</Link>
							<Link to="#" className="pr-2 pl-2">
								<img
									src="https://res.cloudinary.com/scormier/image/upload/v1622570820/cutie-pie/o2qdlguiqmhf0buifv6o.png"
									alt="instagram"
									width="40"
									height="40"
								/>
							</Link>
							<Link to="#">
								<img
									src="https://res.cloudinary.com/scormier/image/upload/v1622570819/cutie-pie/zb4cgqci4olfqwfqk6py.png"
									alt="facebook"
									width="40"
									height="40"
								/>
							</Link>
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
