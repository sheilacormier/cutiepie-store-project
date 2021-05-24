import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext, { Context } from "./store/appContext";
import PrivateRoute from "./component/privateRoute";

import Toast from "react-bootstrap/Toast";
import ToastHeader from "react-bootstrap/ToastHeader";
import ToastBody from "react-bootstrap/ToastBody";

import { Home } from "./pages/home";
import { Single } from "./pages/single";
import { ShopCollection } from "./pages/shop_collection";
import { Wishlist } from "./pages/wishlist";
import { Register } from "./pages/register";
import { ProductDetails } from "./pages/product_details";
import { SignIn } from "./pages/sign_in";
import { Profile } from "./pages/profile";
import { MyNavbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Slogan } from "./component/slogan";
import { PrivacyPolicy } from "./pages/privacy_policy";
import { TermsConditions } from "./pages/terms_conditions";
import { OurStory } from "./pages/our_story";
import { ForgotPassword } from "./pages/forgot_password";

//create your first component
const Layout = () => {
	const { store, actions } = useContext(Context);
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Toast
						className={`bg-${store.alert.type}`}
						onClose={e => actions.clearAlert()}
						show={store.alert.show}
						delay={3000}
						autohide>
						<Toast.Header>
							<strong className="mr-auto">Cutie Pie</strong>
						</Toast.Header>
						<Toast.Body>{store.alert.msg}</Toast.Body>
					</Toast>

					<MyNavbar />
					<Slogan />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/shop_collection">
							<ShopCollection />
						</Route>
						<Route exact path="/wishlist">
							<Wishlist />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/sign_in">
							<SignIn />
						</Route>
						<Route exact path="/forgot">
							<ForgotPassword />
						</Route>
						<PrivateRoute exact path="/profile">
							<Profile />
						</PrivateRoute>
						<Route exact path="/terms_conditions">
							<TermsConditions />
						</Route>
						<Route exact path="/product_details/:productIndex">
							<ProductDetails />
						</Route>
						<Route exact path="/privacy_policy">
							<PrivacyPolicy />
						</Route>
						<Route exact path="/our_story">
							<OurStory />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
