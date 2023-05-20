
class Home {
    constructor (rooms, bathrooms, squareFeet) {
        this.rooms = rooms ;
        this.bathrooms = bathrooms ;
        this.squareFeet = squareFeet ;
    }

    getHomeInfo(){
        return `this home has ${this.rooms} rooms, ${this.bathrooms} bathrooms, and its total area is ${this.squareFeet} Square Feet.` ;

    }

}

class SingleFamilyHome extends Home {
    constructor(rooms, bathrooms, squareFeet, yardSize){
        super(rooms,bathrooms, squareFeet) ;
        this.yardSize = yardSize ;
    }

    getHomeInfo(){
        return `${super.getHomeInfo()} it has a ${this.yardSize} Square Feet yard.`;
    }
}

class Apartment extends Home {
    constructor(rooms, bathrooms, squareFeet, floor){
        super(rooms,bathrooms, squareFeet) ;
        this.floor = floor ;
    }

    getHomeInfo(){
        return `${super.getHomeInfo()} it is located on the ${this.floor} floor.` ;
    }
}

var myHome = new SingleFamilyHome (3,1,1000,70) ;
console.log(myHome.getHomeInfo());

let myApt = new Apartment("2","1",'750',"third");
console.log(myApt.getHomeInfo());