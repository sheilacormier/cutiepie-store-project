const getState = ({ getStore, getActions, setStore }) => {
	const base_url = "https://3001-ivory-dingo-evk7hwf6.ws-us04.gitpod.io/";
	return {
		store: {
			wishlist: [],
			product: [],
			shopCollection: [],
			homeCards: [],
			productDetails: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			initialize: () => {
				fetch(`${base_url}/user`)
					.then(res => res.json())
					.then(data => setStore({ user: data.user }));

				fetch(`${base_url}/product`)
					.then(res => res.json())
					.then(data => setStore({ product: data.product }));
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
				console.log(email, password);
				// return fetch();
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
