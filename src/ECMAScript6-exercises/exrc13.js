/*Crear un modulo que contenga una clase coche con dos atributos: make y km.
El constructor sólo aceptaría como parámetro make, porque km se inicia a 0.
También dispondría de dos métoodos: move(km) que incrementa los km según
la cantidad y getInfo(), que devuelve un string con el make y el número de km*/

//the solution
const Car = require('./car');

const car = new Car('VW');

car.move(100);
car.move(50);

console.log(car.getInfo());


//my solution
class Car {
    constructor(make) {
        this.make = make;
        this.km = 0;
    }
    move = (km) => this.km += km;

    getinfo = () => console.log('Hecho en ' + this.make + ', tiene ' + this.km + ' kilómetros.');

}
const myCar = new Car("China");
myCar.move(150);
myCar.getinfo();


