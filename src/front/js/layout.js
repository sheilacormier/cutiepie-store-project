import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Single } from "./pages/single";
import { ShopCollection } from "./pages/shop_collection";
import { Register } from "./pages/register";
import { ProductDetails } from "./pages/product_details";
import { SignIn } from "./pages/sign_in";
import { Profile } from "./pages/profile";
import injectContext from "./store/appContext";
import { MyNavbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Slogan } from "./component/slogan";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<MyNavbar />
					<Slogan />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						{/* <Route exact path="/single/:theid">
							<Single />
						</Route> */}
						<Route exact path="/shop_collection">
							<ShopCollection />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/sign_in">
							<SignIn />
						</Route>
						<Route exact path="/profile">
							<Profile />
						</Route>
						<Route exact path="/product_details">
							<ProductDetails />
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
