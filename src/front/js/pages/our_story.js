import React, { useContext } from "react";
import { Context } from "../store/appContext";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "../../styles/create-sign_in_account.scss";

export const OurStory = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container className="my-2">
			<h5 className="create-account-title text-center pt-2">THE STORY OF CUTIE PIE</h5>
			<Row className="mx-auto pt-4">
				<Col className="mx-auto">
					<p>
						Cutie Pie was inspired by our kids and our love for fashion. When my son was a baby it was
						challenging to find nice outfits for him. I had to navigate through many websites to find what I
						was looking for. Currently my good friend and business partner is experiencing the same
						challenge with her baby. We noticed that still there is not a good resource or influencer on the
						web for highend fashion for babies and that is hoe Cutie Pie was born. Our goal is to curate
						those fabulous outfits so parents dont have to go from website to website to find them. We
						curate and direct you to the vendors to complete your purchase.
					</p>
					<h3>
						<strong>Get In Touch</strong>
					</h3>
					<p>customerservice@cutiepie.com</p>
					<h3>
						<strong>Hours</strong>
					</h3>
					<p>Monday-Friday 8am-5pm EST</p>
					<h3>
						<strong>Chat Hours</strong>
					</h3>
					<p>Monday-Friday 8am-5pm EST</p>
				</Col>
			</Row>
		</Container>
	);
};
