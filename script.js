// INSTRUCTIONS

// Build a tip calculator.
// Bill amount x (tip percentage / 100) = tip amount
// You should have a form where a user is able to input the cost of the meal.
// The form should also let the user choose the percentage tip they want to give.
// When they submit the form, show them the total with tip added.
// Display the total tip amount as well so they know how much they're tipping.


// PLANNING: 
// Input field for subtotal amount
// Custom amount input field
// Submit button for total 
// .innerHTML the grand total to include tip amount


const tipCalc = () => {
	const subtotal = Number(document.getElementById("cost").value);
	const customTip = Number(document.getElementById("custom-tip").value);
	const total = subtotal + (subtotal * (customTip/100));

	document.getElementById("cost-total").innerHTML = "Subtotal: $" + subtotal;
	document.getElementById("tip-total").innerHTML = "+ Tip: " + customTip + "%";
	document.getElementById("grand-total").innerHTML = "Total: $" + total.toFixed(2);
};