import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import Home from './components/Home/Home';
import Form from './components/Form/Form';

const App = () => {
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
				<Route>
					<Form path="pizza" />
				</Route>
			</Switch>
		</div>
	);
};
export default App;
