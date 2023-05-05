// Prompt 1:
// Clean the coffee_data file:

// Checklist:
// a. All prices should be numbers.
// b. All items should be strings.
// c. Objects and properties should have commas seperating them.
// d. Connect the coffee_data.js file to the index.js file.

let coffeeMenu = [
    {
        name: "cappuccino",
        price: 8,
        seasonal: false,
    },
    {
        name: "espresso",
        price: 5,
        seasonal: false,
    },
    {
        name: "latte",
        price: 5,
        seasonal: false,
    },
    {
        name: "affogato",
        price: 9,
        seasonal: true,
    }, 
    {
        name: "macchiato",
        price: 6,
        seasonal: false,
    },
    {
        name: "americano",
        price: 7,
        seasonal: false,
    },
    {
        name: "iced coffee",
        price: "6",
        seasonal: false,
    },
    {
        name: "frappe",
        price: 8,
        seasonal: false,
    },
    {
        name: "cuban espresso",
        price: "10",
        seasonal: true,
    }
];

// 1. Clean the coffee_data.js file.

// All prices should be numbers.
// All items should be strings.
// Objects and properties should have commas separating them.
// Connect the coffee_data.js file to the index.js file.

function cleanNumbers (item) {
    item.price = Number(item.price) ;
    return item ;
}

updatedCoffeeMenu = coffeeMenu.map(cleanNumbers) ;
// console.table(coffeeMenu) ;
module.exports = updatedCoffeeMenu ;
