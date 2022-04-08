/*Declarar en ES6 la clase Persona*/


//my solution
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hi, my name is ${this.name} and I\'m ${this.age} years old.`);
    }
    haveABirthday() {
        this.age++;
    }


}
const Posti = new Person("Posti", 36);
Posti.haveABirthday();
Posti.greet();

console.log(Posti)