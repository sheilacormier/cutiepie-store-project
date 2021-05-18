const getState = ({ getStore, getActions, setStore }) => {
	const base_url = "https://3001-ivory-dingo-evk7hwf6.ws-us04.gitpod.io/api";
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
			}
		},
		actions: {
			// Use getActions to call a function within a fuction
			initialize: () => {
				getActions().checkToken();
				fetch(`${base_url}/product`)
					.then(res => res.json())
					.then(data =>
						setStore({
							product: data.products,
							homeCards: data.products.slice(0, 4)
						})
					);
			},

			checkToken: () => {
				let tokenCheck = JSON.parse(localStorage.getItem("cutie-pie"));

				if (tokenCheck !== null) {
					// token is present, so do something (set loggedIn, maybe?)
					console.log(tokenCheck);
					let validate_token = fetch(`${base_url}/validate`, {
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${tokenCheck.token}`
						}
					})
						.then(res => res.json())
						.then(data =>
							setStore({
								user: {
									...getStore().user,
									...tokenCheck,
									loggedIn: true
								}
							})
						);
				} else {
					// token is not present, redirect to login flow
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
				//and pushes data
				store.wishlist.push(data);
				//reset the global store
				setStore(store);
			},

			removeWishilist: index => {
				//get the store
				const store = getStore();
				//and filter data
				let wishlist = store.wishlist.filter((item, i) => i !== index);
				//reset the global store
				setStore({ wishlist: wishlist });
			},

			countWishlist: () => {
				//get the store
				const store = getStore();
				//and count data
				const length = store.wishlist.length;
				//return results
				return length;
			},

			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				// const demo = store.demo.map((elm, i) => {
				// 	if (i === index) elm.background = color;
				// 	return elm;
				// });

				//reset the global store
				// setStore({ demo: demo });
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
								email: data.user.email
							})
						);
					});
			},
			signout: () => {
				setStore({
					user: {
						...getStore().user,
						loggedIn: false
					}
				});
			},

			register: (name, email, password) => {
				console.log(name, email, password);
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
		}
	};
};

export default getState;
