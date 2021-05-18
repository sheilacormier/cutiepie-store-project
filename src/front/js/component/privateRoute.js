import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

function PrivateRoute({ children, ...rest }) {
	const { store, actions } = useContext(Context);
	let auth = store.user.loggedIn;
	return (
		<Route
			{...rest}
			render={({ location }) =>
				auth ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/sign_in",
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
}

export default PrivateRoute;
