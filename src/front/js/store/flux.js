const getState = ({ getStore, getActions, setStore }) => {
	// const base_url = "https://3001-indigo-scorpion-3ya2agsq.ws-us04.gitpod.io/api";
	const base_url = `${process.env.BACKEND_URL}/api`;

	return {
		store: {
			product: [],
			shopCollection: [],
			homeCards: [],
			productDetails: [],
			user: {
				photo_url: "",
				token: "",
				loggedIn: false,
				display_name: "",
				email: "",
				id: null,
				wishlist: []
			},
			alert: {
				type: "",
				msg: "",
				show: false
			}
		},
		actions: {
			// Use getActions to call a function within a fuction
			initialize: () => {
				getActions().checkToken();
				getActions().getAllProducts();
			},

			setAlert: payload => {
				/* payload should be an object with the following shape:
                    {
                        type: "",
                        msg: "",
                        show: false
                    }
                    type either: danger, success, warning
                */
				setStore({ alert: payload });
			},

			clearAlert: () => {
				setStore({
					alert: {
						type: "",
						msg: "",
						show: false
					}
				});
			},

			getAllProducts: () => {
				return fetch(`${base_url}/product`)
					.then(res => res.json())
					.then(data =>
						setStore({
							product: data.products,
							homeCards: data.products.slice(0, 4),
							shopCollection: data.products,
							productDetails: data.products
						})
					)
					.catch(err => console.error(err));
			},

			checkToken: () => {
				let tokenCheck = JSON.parse(localStorage.getItem("cutie-pie"));

				if (tokenCheck !== null) {
					// token is present, so do something (set loggedIn, maybe?)
					// console.log(tokenCheck);
					return fetch(`${base_url}/validate`, {
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${tokenCheck.token}`
						}
					})
						.then(res => {
							if (res.status === 401) {
								throw new Error("Token Expired, please login.");
							}

							if (!res.ok) throw new Error(res.statusText);
							return res.json();
						})
						.then(data =>
							setStore({
								user: {
									...getStore().user,
									...tokenCheck,
									...data.user,
									loggedIn: true
								}
							})
						)
						.catch(err => console.error(err));
				}
			},

			getUserProfile: (uid, token) => {
				return fetch(`${base_url}/user/${uid}`, {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`
					}
				})
					.then(res => res.json())
					.then(data => setStore({ user: data.users }));
			},

			addWishlist: data => {
				//get the store
				const store = getStore();

				let wishlist = store.user.wishlist.concat(data);
				let tokenCheck = JSON.parse(localStorage.getItem("cutie-pie"));

				let payload = {
					wishlist: wishlist
				};
				// console.log(payload);

				return fetch(`${base_url}/user/wishlist/${store.user.id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${tokenCheck.token}`
					},
					body: JSON.stringify(payload)
				})
					.then(res => {
						if (!res.ok) throw new Error(res.statusText);
						return res.json();
					})
					.then(data =>
						setStore({
							user: {
								...data.user,
								loggedIn: true
							}
						})
					);
			},

			removeWishlist: product => {
				const store = getStore();

				let wishlist = store.user.wishlist.filter((item, i) => item.id !== product.id);
				let tokenCheck = JSON.parse(localStorage.getItem("cutie-pie"));

				let payload = {
					wishlist: wishlist
				};
				// console.log(payload);

				return fetch(`${base_url}/user/wishlist/${store.user.id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${tokenCheck.token}`
					},
					body: JSON.stringify(payload)
				})
					.then(res => {
						if (!res.ok) throw new Error(res.statusText);
						return res.json();
					})
					.then(data =>
						setStore({
							user: {
								...data.user,
								loggedIn: true
							}
						})
					);
			},

			countWishlist: () => {
				//get the store
				const store = getStore();
				//and count data
				const length = store.wishlist.length;
				//return results
				return length;
			},

			signIn: (email, password) => {
				return fetch(`${base_url}/login/`, {
					method: "POST",
					cors: "no-cors",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				})
					.then(res => res.json())
					.then(data => {
						setStore({
							user: {
								...data.user,
								loggedIn: true
							}
						});
						// add token and info to local storage
						localStorage.setItem(
							"cutie-pie",
							JSON.stringify({
								token: data.token,
								display_name: data.user.first_name, // Users first name typically
								email: data.user.email,
								id: data.user.id
							})
						);
					});
			},

			signOut: () => {
				setStore({
					user: {
						...getStore().user,
						loggedIn: false
					}
				});
			},

			register: (email, password) => {
				console.log(email, password);
			},

			newsletter: email => {
				console.log(email);
			},

			updateEmail: email => {
				console.log(email);
			},

			updatePassword: password => {
				console.log(password);
			}

			// uploadImage: user => {
			// 	setStore({
			// 		...getStore().user,
			// 		photo_url: image
			// 	});
			// }

			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	// const demo = store.demo.map((elm, i) => {
			// 	// 	if (i === index) elm.background = color;
			// 	// 	return elm;
			// 	// });

			// 	//reset the global store
			// 	// setStore({ demo: demo });
			// },

			// getMessage: () => {
			// 	// fetching data from the backend
			// 	fetch(process.env.BACKEND_URL + "/api/hello")
			// 		.then(resp => resp.json())
			// 		.then(data => setStore({ message: data.message }))
			// 		.catch(error => console.log("Error loading message from backend", error));
			// }
		}
	};
};

export default getState;
