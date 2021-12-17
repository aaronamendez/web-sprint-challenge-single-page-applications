import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';

// Components
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import axios from 'axios';

const App = () => {
	// FORM STATE
	const initialFormData = {
		name: '',
		pizzaSize: '',
		pepperoni: false,
		bacon: false,
		mushrooms: false,
		onions: false,
		specialInstructions: '',
	};

	const initialOrder = {}; // Object

	const [formData, setFormData] = useState(initialFormData);
	const [order, setOrder] = useState(initialOrder);

	const change = (name, value) => {
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const submitNewOrder = (order) => {
		axios
			.post('https://reqres.in/api/orders', order)
			.then((res) => {
				console.log(res.data);
				setOrder(res.data);
			})
			.catch((err) => console.error(err))
			.finally(() => {
				setFormData(initialFormData);
			});
	};

	const submit = () => {
		const order = {
			name: formData.name,
			pizzaSize: formData.pizzaSize,
			toppings: ['pepperoni', 'bacon', 'mushrooms', 'onions'].filter(
				(topping) => !!formData[topping]
			),
			instructions: formData.specialInstructions,
		};
		submitNewOrder(order);
	};

	return (
		<div>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/pizza" id="order-pizza">
					Order Pizza
				</Link>
			</nav>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/pizza">
					<Form data={formData} change={change} submit={submit} />
				</Route>
			</Switch>
		</div>
	);
};
export default App;
