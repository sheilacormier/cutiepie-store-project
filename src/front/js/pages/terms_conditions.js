import React, { useContext } from "react";
import { Context } from "../store/appContext";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "../../styles/create-sign_in_account.scss";

export const Register = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container className="my-2">
			<h5 className="create-account-title text-center pt-2">TERMS AND CONDITIONS</h5>
			<Row className="mx-auto pt-4">
				<Col sm={12} md={6} lg={4} className="mx-auto">
					<p>

                        Introduction
                        1.1	These terms and conditions shall govern your use of our website.
                        1.2	By using our website, you accept these terms and conditions in full; accordingly, if you disagree with these terms and conditions or any part of these terms and conditions, you must not use our website.
                        1.3	If you [register with our website, submit any material to our website or use any of our website services], we will ask you to expressly agree to these terms and conditions.
                        1.4	You must be at least [18] years of age to use our website; by using our website or agreeing to these terms and conditions, you warrant and represent to us that you are at least [18] years of age.
                        1.5	Our website uses cookies; by using our website or agreeing to these terms and conditions, you consent to our use of cookies in accordance with the terms of our [privacy and cookies policy].
                        2.	Credit
                        2.1	This document was created using a template from Cutie pie (http://www.cutiepie.com).
                        You must retain the above credit. Use of this document without the credit is an infringement of copyright. However, you can purchase from us an equivalent document that does not include the credit.
                        3.	Copyright notice
                        3.1	Copyright (c) 2021 cutie pie
                        3.2	Subject to the express provisions of these terms and conditions:
                        (a)	we, together with our licensors, own and control all the copyright and other intellectual property rights in our website and the material on our website; and
                        (b)	all the copyright and other intellectual property rights in our website and the material on our website are reserved.
                        4.	Licence to use website
                        4.1	You may:
                        (a)	view pages from our website in a web browser;
                        (b)	download pages from our website for caching in a web browser;
                        (c)	print pages from our website;
                        (d)	[stream audio and video files from our website]; and
                        (e)	[use [our website services] by means of a web browser],
                            subject to the other provisions of these terms and conditions.
                        4.2	Except as expressly permitted by Section 4.1 or the other provisions of these terms and conditions, you must not download any material from our website or save any such material to your computer.
                        4.3	You may only use our website for [your own personal and business purposes], and you must not use our website for any other purposes.
                        4.4	Except as expressly permitted by these terms and conditions, you must not edit or otherwise modify any material on our website.
                        4.5	Unless you own or control the relevant rights in the material, you must not:
                        (a)	republish material from our website (including republication on another website);
                        (b)	sell, rent or sub-license material from our website;
                        (c)	show any material from our website in public;
                        (d)	exploit material from our website for a commercial purpose; or
                        (e)	redistribute material from our website.
                        4.6	Notwithstanding Section 4.5, you may redistribute [our newsletter] in [print and electronic form] to [any person].
                        4.7	We reserve the right to restrict access to areas of our website, or indeed our whole website, at our discretion; you must not circumvent or bypass, or attempt to circumvent or bypass, any access restriction measures on our website.
                        5.	Acceptable use
                        5.1	You must not:
                        (a)	use our website in any way or take any action that causes, or may cause, damage to the website or impairment of the performance, availability or accessibility of the website;
                        (b)	use our website in any way that is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity;
                        (c)	use our website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software;
                        (d)	[conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) on or in relation to our website without our express written consent];
                        (e)	[access or otherwise interact with our website using any robot, spider or other automated means[, except for the purpose of [search engine indexing]]];
                        (f)	[violate the directives set out in the robots.txt file for our website]; or
                        (g)	[use data collected from our website for any direct marketing activity (including without limitation email marketing, SMS marketing, telemarketing and direct mailing)].

                    </p>               



				</Col>
				<Col sm={12} className="mx-auto">
					<img
						className="img-fluid"
						src="https://res.cloudinary.com/scormier/image/upload/v1620161769/cutie-pie/buttlerfly-path_aycx2b.png"
						alt="butterfly"
						w-100
					/>
				</Col>
			</Row>
		</Container>
	);
};
