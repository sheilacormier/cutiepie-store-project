const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			shopCollection: [
				{
					h1: "Leopard Onesie",
					img: "https://via.placeholder.com/250x220?text=Placeholder"
				},
				{
					h1: "Leopard Onesie",
					img: "https://via.placeholder.com/250x220?text=Placeholder"
				},
				{
					h1: "Leopard Onesie",
					img: "https://via.placeholder.com/250x220?text=Placeholder"
				},
				{
					h1: "Leopard Onesie",
					img: "https://via.placeholder.com/250x220?text=Placeholder"
				},
				{
					h1: "Leopard Onesie",
					img: "https://via.placeholder.com/250x220?text=Placeholder"
				},
				{
					h1: "Leopard Onesie",
					img: "https://via.placeholder.com/250x220?text=Placeholder"
				},
				{
					h1: "Leopard Onesie",
					img: "https://via.placeholder.com/250x220?text=Placeholder"
				},
				{
					h1: "Leopard Onesie",
					img: "https://via.placeholder.com/250x220?text=Placeholder"
				},
				{
					h1: "Leopard Onesie",
					img: "https://via.placeholder.com/250x220?text=Placeholder"
				}
			],
			homeCards: [
				{
					brand: "Polo Ralph Lauren",
					title: "Baby Boys Cotton Interlock Polo Shortall",
					price: "$55",
					color: "blue",
					size: "0-3 months",
					img:
						"https://res.cloudinary.com/scormier/image/upload/v1620484388/cutie-pie/sample-details1_eeqkzy.png",
					description: "blah, blah"
				},
				{
					brand: "Polo Ralph Lauren",
					title: "Baby Boys Cotton Interlock Polo Shortall",
					price: "$55",
					color: "blue",
					size: "0-3 months",
					img: "https://res.cloudinary.com/scormier/image/upload/v1620334490/cutie-pie/outfit2_hdw0oc.png",
					description: "blah, blah"
				},
				{
					brand: "Polo Ralph Lauren",
					title: "Baby Boys Cotton Interlock Polo Shortall",
					price: "$55",
					color: "blue",
					size: "0-3 months",
					img: "https://res.cloudinary.com/scormier/image/upload/v1620334490/cutie-pie/outfit3_wco9ga.png",
					description: "blah, blah"
				},
				{
					brand: "Polo Ralph Lauren",
					title: "Baby Boys Cotton Interlock Polo Shortall",
					price: "$55",
					color: "blue",
					size: "0-3 months",
					img:
						"https://res.cloudinary.com/scormier/image/upload/v1620485867/cutie-pie/sample-details1_sm_my7qxl.png",
					description: "blah, blah"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

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
			}
		}
	};
};

export default getState;
