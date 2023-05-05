const coffeeMenu = require ("./coffee_data.js") ;

// 2. Print an array of all the drinks on the menu.
function printName (item){
    return item.name ;
};
console.log (coffeeMenu.map(printName)) ;

// 3. Print an array of drinks that cost 5 and under.
function fiveAndUnder (item){
    if(item.price <= 5) {
        return item.name ; 
    } 
};
const itemsFiveAndUnder = coffeeMenu.filter(fiveAndUnder) ;
console.log (itemsFiveAndUnder.map(printName)) ;


// 4. Print an array of drinks that are priced at an even number.
function isEvenPriced (item) {
    if (item.price % 2 === 0 ){
        return item.name ;
    }
} ;
const evenPricedItems = coffeeMenu.filter(isEvenPriced) ;
console.log(evenPricedItems.map(printName));


// 5. Print the total if you were to order one of every drink.
function totalPrice (total, item){
    return total += item.price ;
} ;
const finalTotalPrice = coffeeMenu.reduce(totalPrice , 0) ;
// another solution for 5
/*
const totalPrice = coffeeMenu.reduce(
    (total,item) => (total += item.price) , 0
) ;
*/
console.log(finalTotalPrice) ;

// 6. Print an array with all the drinks that are seasonal.
function isSeasonal (item) {
    if (item.seasonal) {
        return item.name ;
    }
} ;

const seasonal = coffeeMenu.filter(isSeasonal) ;
console.log (seasonal.map(printName)) ;

// 7. Print all the seasonal drinks with the words "with imported beans" 
//    after the item name. For example: "affogato with imported beans".
function seasonalPrint (item) {
    return (item.name + " with imported beans") ;
} ;
const printSeasonal = seasonal.map(seasonalPrint) ;
console.log(printSeasonal);
// another solution for 7
seasonal.forEach(item => console.log(item.name + " with imported beans"));






