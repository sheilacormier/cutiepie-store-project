import React, { useContext } from "react";
import { Context } from "../store/appContext";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "../../styles/create-sign_in_account.scss";

export const AboutUs = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container className="my-2">
			<h5 className="create-account-title text-center pt-2">ABOUT US</h5>
			<Row className="mx-auto pt-4">
				<Col className="mx-auto">
					<p>
						Cutie Pie, LLC (“we,”“us,” or “our”) is pleased to provide you with access to our Website. This
						Privacy Policy describes our practices with respect to the collection, transfer, manipulation,
						disclosure and other uses of Your Information and certain other information collected by us
						through our Website. For purposes of this Privacy Policy, “Your Information” means information
						about you which may be of a confidential nature and may include personally identifiable
						information, including your first and last name and email address.
					</p>

					<p>
						This Privacy Policy applies to information collected by us through our Website, but does not
						apply to information collected by any person or entity other than us, even if related to our
						Website (such as a third-party website, content, application or platform that may link to or be
						accessible from or on our Website, such as the PayCom platform). PLEASE READ THIS PRIVACY POLICY
						CAREFULLY BEFORE USING OUR WEBSITE. BY USING OUR WEBSITE, OR BY CLICKING TO ACCEPT OR AGREE TO
						OUR TERMS OF USE WHEN THIS OPTION IS MADE AVAILABLE TO YOU, YOU ACCEPT AND AGREE TO BE BOUND AND
						ABIDE BY OUR TERMS OF USE, INCLUDING THIS PRIVACY POLICY. IF YOU DO NOT WANT YOUR INFORMATION
						USED OR DISCLOSED IN THE MANNER DESCRIBED IN THIS PRIVACY POLICY, OR IF YOU DO NOT AGREE WITH
						ANY TERM OR CONDITION IN THIS PRIVACY POLICY OR OUR TERMS OF USE, THEN YOU MUST NOT ACCESS OR
						USE OUR WEBSITE OR SUBMIT YOUR INFORMATION TO US. This Privacy Policy may change from time to
						time (see Section 8, “Changes to our Privacy Policy”). Your continued use of our Website after
						we make changes is deemed to be acceptance of those changes, so please check this policy
						periodically for updates.
					</p>

					<p>
						Our Website is intended to be accessed and used only by adults and are not directed to minors.
						If you are below the age of 18, you may access and participate in our Website only under the
						supervision of a parent or legal guardian who agrees to be bound by this Privacy Policy and our
						Terms of Use.
					</p>

					<p>
						We do not knowingly collect personally identifiable information by anyone under the age of 16
						and you should not provide us with any information regarding any individual under the age of 16.
						If we learn that we have inadvertently gathered information from anyone under the age of 16, we
						will take reasonable measures to promptly remove that information from our records.
					</p>

					<p>
						California residents under 16 years of age may have additional rights regarding the collection
						and sale of their personal information. Please see Section 10, “Your California Privacy Rights”
						for more information. 2. What Information We Collect and How We Collect It We receive and
						collect several types of information about you, such as the information described below.
						Information you provide to us: From time to time, you may provide us with certain information,
						including Your Information or information of third parties, such as the company on whose behalf
						you are making an inquiry. Instances where you may provide this information include when you
						request us to contact you or request a quote for our products or services through our Website,
						fill out forms or fields on or through our Website, or sign up for any promotions or to receive
						newsletters or other materials about us, our Website or those of third parties. By way of
						example, when you request us to contact you or provide a quote for our products or services, you
						may provide your email.{" "}
					</p>

					<p>
						We may also obtain information about you from social media networks on or through which you may
						access the Website. The information that we will receive depends on the third party and your
						privacy settings with that third party. All information that you disclose to third parties will
						be subject to the privacy policies and practices of such third parties. You should review the
						privacy policies and practices of such third parties prior to disclosing information to them. We
						may also collect information on or from third party platforms such as DirectMail2.0, HubSpot,
						Google AdWords, Google Analytics, etc. may use various technologies to collect and store
						information when you use our Website, including sending cookies, web beacons, pixel tags or
						other anonymous identifiers to your device, or otherwise tracking your activities on our Website
						over time. “Cookies” are pieces of data stored on a computer, mobile phone or other device.{" "}
					</p>

					<p>
						A “web beacon” is a type of technology that lets us know if you visited a certain page or
						whether you opened an email. A “pixel tag” is a type of technology placed within a website or
						e-mail for the purpose of tracking activity, which is often used in combination with cookies.
						Other “anonymous identifiers” include random strings of characters used for the same purposes as
						cookies, such as with mobile devices where cookie technology may not be available. These
						technologies help us know that you are logged on to or using our Website, provide you with
						features based on your preferences, help us understand when and how you are interacting with our
						Website and compile other information regarding your use of our Website. We also may use these
						technologies to collect information about your online activities over time and/or across
						third-party websites or other online Website (a practice known as behavioral tracking). The
						information collected through these technologies, standing alone, cannot be used to determine
						your identity. Such information may, however, be combined in a way that makes it become
						personally identifiable information (i.e., information that can identify you). For example, we
						may tie this information to personal information about you that we collect from other sources or
						that you provide to us. If this happens, we will treat the combined information as personally
						identifiable information. It may be possible to disable some (but not all) Cookies or automatic
						data collection technologies through your device or browser settings, but doing so may affect
						the functionality of our Website. The method for disabling Cookies or other automatic collection
						technologies may vary by device and browser, but can usually be found in preferences or security
						settings. For example, iOS and Android devices each have settings which are designed to limit
						forms of ad tracking.
					</p>
				</Col>
			</Row>
		</Container>
	);
};
