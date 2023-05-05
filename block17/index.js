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



const totalPrice = coffeeMenu.reduce(
    (total,item) => (total += item.price) , 0
) ;
console.log(totalPrice) ;


function isSeasonal (item) {
    if (item.seasonal) {
        return item.name ;
    }
} ;

const seasonal = coffeeMenu.filter(isSeasonal) ;
console.log (seasonal.map(printName)) ;


function seasonalPrint (item) {
    return (item.name + " with imported beans") ;
} ;

seasonal.forEach(item => console.log(item.name + " with imported beans"));






