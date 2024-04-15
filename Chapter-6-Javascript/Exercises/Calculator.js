document.getElementById('calculateButton').addEventListener('click', function() {
    // Retrieve values from input fields
    var petrolCost = parseFloat(document.getElementById('petrolCost').value);
    var litersPurchased = parseFloat(document.getElementById('litersPurchased').value);
    
    // Calculate total cost
    var totalCost = petrolCost * litersPurchased;
    
    // Display total cost
    document.getElementById('totalCost').textContent = 'Total Cost: $' + totalCost.toFixed(2);
});
