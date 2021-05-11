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
					id: "1",
					price: "$35",
					img: "https://res.cloudinary.com/scormier/image/upload/v1620334490/cutie-pie/outfit1_l8oaq2.png"
				},
				{
					id: "2",
					price: "$45",
					img: "https://res.cloudinary.com/scormier/image/upload/v1620334490/cutie-pie/outfit2_hdw0oc.png"
				},
				{
					id: "3",
					price: "$25",
					img: "https://res.cloudinary.com/scormier/image/upload/v1620334490/cutie-pie/outfit3_wco9ga.png"
				},
				{
					id: "4",
					price: "$55",
					img:
						"https://res.cloudinary.com/scormier/image/upload/v1620485867/cutie-pie/sample-details1_sm_my7qxl.png"
				}
			],

			productDetails: [
				{
					id: "1",
					brand: "Polo Ralph Lauren",
					title: "Baby Boys Cotton Interlock Polo Shortall",
					price: "$35",
					color: "blue",
					size: "0-3 months",
					img: "https://res.cloudinary.com/scormier/image/upload/v1620334490/cutie-pie/outfit1_l8oaq2.png",
					description:
						"Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et"
				},
				{
					id: "2",
					brand: "Polo Ralph Lauren",
					title: "Baby Boys Cotton Interlock Polo Shortall",
					price: "$45",
					color: "blue",
					size: "0-3 months",
					img: "https://res.cloudinary.com/scormier/image/upload/v1620334490/cutie-pie/outfit2_hdw0oc.png",
					description:
						"Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et"
				},
				{
					id: "3",
					brand: "Polo Ralph Lauren",
					title: "Baby Boys Cotton Interlock Polo Shortall",
					price: "$25",
					color: "blue",
					size: "0-3 months",
					img: "https://res.cloudinary.com/scormier/image/upload/v1620334490/cutie-pie/outfit3_wco9ga.png",
					description:
						"Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et"
				},
				{
					id: "4",
					brand: "Polo Ralph Lauren",
					title: "Baby Boys Cotton Interlock Polo Shortall",
					price: "$55",
					color: "blue",
					size: "0-3 months",
					img:
						"https://res.cloudinary.com/scormier/image/upload/v1620485867/cutie-pie/sample-details1_sm_my7qxl.png",
					description:
						"Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et"
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
