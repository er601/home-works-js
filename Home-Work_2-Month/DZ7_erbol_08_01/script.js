class Transport {
    constructor(name, engine, color, fuel, salon) {
        this.name = name;
        this.engine = engine;
        this.color = color;
        this.fuel = fuel;
        this.seat = salon;
    }

    startEngine () {
        console.log("Engine is disable");
    }
}

class Car extends Transport{
    constructor(name, engine, color, fuel, salon, transmission) {
        super(name, engine, color, fuel, salon);
        this.transmission = transmission;
    }
    startEngine() {
        console.log("Engine is start");
    }
}

class Train extends Transport {
    constructor(name, engine, color, fuel, salon, wagons) {
        super(name, engine, color, fuel, salon);
        this.wagons = wagons;
    }
    startEngine() {
        console.log("Engine is start");
    }
}

const train = new Train("Поезд Бишкек - Балыкчы", "Теплопаровой", "blue", "Уголь", "Купе", 20);
console.log(train);
train.startEngine();

const car = new Car("Toyota Camry", 3.5, "Black", "Petrol", "leather interior", "Automatic");
console.log(car);
car.startEngine();












































//
// class Transport {
//     constructor(name, engine, color, ) {
//         this.name = name;
//         this.weight = weight;
//         this.color = color;
//         this.startEngine = startEngine
//     }
//
//     doStartEngine () {
//         console.log("Engine is dicable")
// }
// }
// class Car extends Transport {
//     constructor(name, weigh, color, startEngine) {
//         super(name, weigh, color, startEngine);
//     }
//
//     startEngine() {
//         console.log("Engine is start")
//     }
// }
//
// const  car = new Car("Toyta" )
//
//

//
