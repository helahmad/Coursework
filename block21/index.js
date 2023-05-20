
class Car {
    constructor(make, model, year){
        this.make = make ;
        this.model = model ;
        this.year = year ;
    }
    getDescription(){
        return `this ${this.make} car is ${this.model} model and it is of year ${this.year}.`;
    }
}

class ElectricCar extends Car {
    constructor(make, model, year, range){
        super(make, model, year) ;
        this.range = range ;
    }
    getDescription() {
        return `${super.getDescription()} This Electric car has the range of ${this.range} miles`;
    }
}

var myCar = new ElectricCar('Tesla', 'Model S', 2019, 300) ;
console.log(myCar.getDescription()) ;