//Crear un modulo que contenga una clase coche con dos atributos: make y km.
// El constructor sólo aceptaría como parámetro make, porque km se inicia a 0.
// También dispondría de dos métoodos: move(km) que incrementa los km según
// la cantidad y getInfo(), que devuelve un string con el make y el número de km


class Car {
    constructor(make, km) {
        this.make = make;
        this.km = 0;
    }
    move = () => this.km++

    getinfo = () => 'He hecho ' + this.make + ' y ' + this.km + ' kilómetros.';

}
const result = new Car(4);
console.log(result.move());
console.log(result.getinfo());

