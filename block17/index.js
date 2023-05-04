const coffeeMenu = require ("./coffee_data.js") ;

function printName (item){
    return item.name ;
};
console.log (coffeeMenu.map(printName)) ;

function fiveAndUnder (item){
    if(item.price <= 5) {
        return item.name ; 
    } 
};
const itemsFiveAndUnder = coffeeMenu.filter(fiveAndUnder) ;
console.log (itemsFiveAndUnder.map(printName)) ;

function isEvenPriced (item) {
    if (item.price % 2 === 0 ){
        return item.name ;
    }
} ;
const evenPricedItems = coffeeMenu.filter(isEvenPriced) ;
console.log(evenPricedItems.map(printName));

/*
const collectPrice = (array) => {
    
    return item.price ;
} ;

const priceArray = coffeeMenu.map(collectPrice) ;
const sumTotal = (accumatator, currentValue) => {
    return accumatator + currentValue ;
} ;
const totalPrice = priceArray.reduce(sumTotal) ;
console.log(totalPrice) ;
*/

function isSeasonal (item) {
    if (item.seasonal) {
        return item.name ;
    }
}
const seasonal = coffeeMenu.filter(isSeasonal) ;
console.log (seasonal.map(printName)) ;


seasonal.forEach(element => console.log(element + " with imported beans"))




