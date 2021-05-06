import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Subscribe = () => (
	<Col xs={12} md={8}>
		<div className="subscribe">Subcribe to our newsletter</div>
		<div className="subscribe">Promotions, new products and sales directly to your inbox.</div>
		<Form>
			<Form.Row className="align-items-center">
				<Col sm={5} className="my-1">
					<Form.Control id="inlineFormInputName" placeholder="youremail@gmail.com" />
				</Col>
				<Col xs="auto" className="my-1">
					<Button type="submit">Submit</Button>
				</Col>
			</Form.Row>
		</Form>
	</Col>
);
