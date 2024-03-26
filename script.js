class Smoothie {
    constructor(base, fruits, extras, toppings) {
        this.base = base; 
        this.fruits = fruits; 
        this.extras = extras; 
        this.toppings = toppings; 
    }

    // This method calculates the total price of the smoothie...........
    calculatePrice() {
        // Start with the price of the base, converting it to a number with parseFloat
        let totalPrice = parseFloat(document.querySelector(`option[value="${this.base}"]`).getAttribute('data-price'));

        // Adding the price of each selected fruit...............
        this.fruits.forEach(fruit => {
            totalPrice += parseFloat(document.querySelector(`input[value="${fruit}"]`).getAttribute('data-price'));
        });;

        // Adding the price of each selected extra..............
        this.extras.forEach(extra => {
            totalPrice += parseFloat(document.querySelector(`option[value="${extra}"]`).getAttribute('data-price'));
        });


        // Adding the price of each selected toppings...................
        this.toppings.forEach(topping => {
            totalPrice += parseFloat(document.querySelector(`option[value="${topping}"]`).getAttribute('data-price'));
        });

        // Returning the total price, fixed to 2 decimal places as a string...........
        return totalPrice.toFixed(2);
    }

    // This method creates a description of the smoothie order.................
    describe() {
        // Returning a string describing the smoothie, including its components and total cost..............
        return `Your smoothie with a base of ${this.base}, including fruits [${this.fruits.join(", ")}], extras [${this.extras.join(", ")}], and toppings [${this.toppings.join(", ")}], costs $${this.calculatePrice()}.`;
    }
}

// Listen for a click event on the 'orderBtn' button..............
document.getElementById('orderBtn').addEventListener('click', function() {
    // Retrieveing the selected base, fruits, extras, and toppings from the form............
    const base = document.getElementById('base').value;
    const fruits = Array.from(document.querySelectorAll('input[name="fruit"]:checked')).map(input => input.value);
    const extras = Array.from(document.getElementById('extras').selectedOptions).map(option => option.value);
    const toppings = Array.from(document.getElementById('toppings').selectedOptions).map(option => option.value);

    // Creating a new Smoothie object with the selected ingredients............
    const smoothie = new Smoothie(base, fruits, extras, toppings);

    // Displaying the description of the smoothie in the 'smoothieDescription' div.............
    document.getElementById('smoothieDescription').innerHTML = smoothie.describe();
});