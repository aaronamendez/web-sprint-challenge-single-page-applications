import React from 'react';
import './index.css';

const Form = () => {
	return (
		<div className="form">
			<h2>Form Component</h2>
			<form id="pizza-form">
				{/* Name */}
				<label>
					Name
					<input
						type="text"
						name="name"
						id="name-input"
						placeholder="Enter Name"
					/>
				</label>

				{/* Dropdown */}

				<label>
					Pizza Size
					<select name="size" id="size-dropdown">
						<option>--Select Size--</option>
						<option>Small</option>
						<option>Medium</option>
						<option>Large</option>
					</select>
				</label>

				{/* Checkboxes */}

				<label>
					Pepperoni
					<input
						type="checkbox"
						name="pepperoni"
						// checked={}
						// onChange={}
					/>
				</label>
				<label>
					Bacon
					<input
						type="checkbox"
						name="bacon"
						// checked={}
						// onChange={}
					/>
				</label>
				<label>
					Mushrooms
					<input
						type="checkbox"
						name="mushrooms"
						// checked={}
						// onChange={}
					/>
				</label>
				<label>
					Onions
					<input
						type="checkbox"
						name="onions"
						// checked={}
						// onChange={}
					/>
				</label>
				<label>
					Special Instructions
					<input
						type="textarea"
						id="special-text"
						name="special"
						placeholder=""
					/>
				</label>
				<button id="order-button">Add to Order</button>
			</form>
		</div>
	);
};

export default Form;
