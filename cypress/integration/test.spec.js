describe('Bloomtech Pizza App', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/pizza');
	});

	// I'm a bit confused about the instruction regarding
	// "test that you can add text to the box", not really
	// sure what box this is referencing? The name input?

	// Helpers to grab elements
	const nameInput = () => cy.get('input[name=name]');
	const instructionTextArea = () => cy.get('textarea[name=specialInstructions');

	it('name input, and textarea exists', () => {
		nameInput().should('exist');
		instructionTextArea().should('exist');
	});

	it('able to type values into the name input and text area', () => {
		nameInput().type('Spiderman');
		nameInput().should('have.value', 'Spiderman');
		instructionTextArea().type(
			'Please do not ring the doorbell! kids sleeping!'
		);
		instructionTextArea().should(
			'have.value',
			'Please do not ring the doorbell! kids sleeping!'
		);
	});
});
