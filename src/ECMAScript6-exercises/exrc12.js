//Declarar en ES6 la clase Persona


function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log('Hi, my name is ' + this.name + ' and I\'m ' + this.age + ' years old.');
};

Person.prototype.haveABirthday = function () {
    this.age++;
};

var p = new Person('Posti', 36);

p.haveABirthday();
p.greet();


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const Posti = new Person("Posti", 36);
console.log(Posti)