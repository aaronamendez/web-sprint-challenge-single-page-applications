import React from 'react';
import './index.css';

const OrderConfirmed = ({ data }) => {
	// const error = () => {
	// 	<div>
	// 		<h2>404 ERROR!</h2>
	// 	</div>;
	// };

	// const message = () => {
	// 	<div>
	// 		<h2>Great!</h2>
	// 	</div>;
	// };

	// const dataExists = (data) => {
	// 	if (data === !null) {
	// 		return message;
	// 	} else {
	// 		return error;
	// 	}
	// };
	return (
		<div className="confirmation">
			{/* {dataExists(data) ? message : error} */}
			<h2>Congrats! Pizza is on it's way!</h2>
			<div>
				<p>Name: {data.name}</p>
				<p>Pizza Size: {data.pizzaSize}</p>
				<p>Toppings:</p>
				<ul>
					{data.toppings.map((topping, idx) => {
						return <li key={idx}>{topping}</li>;
					})}
				</ul>
				<h3>Instructions: {data.instructions}</h3>
			</div>
		</div>
	);
};

export default OrderConfirmed;
