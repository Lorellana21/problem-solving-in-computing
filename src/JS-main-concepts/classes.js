/*---------------------------- ES5 --------------------------------*/

function SaludoES5(nombre) {
    this.nombre = nombre;
}
/*Así se declaraba una clase:
Se pone la funcion, el nombre de una clase y recibe los parametros
que le pasamos al constructor. Dentro lleva el this., la propiedad 
que quiero que contenga mi clase y le asigno ese valor que viene 
del constructor u otro valor cualquiera.*/


SaludoES5.prototype.hola = function(){
    return "Hola, " + this.nombre;
}
/*Para crear métodos se utiliza la cadena prototípica, 
que ahora se sigue usando pero que no vemos*/

const saludoES5 = new SaludoES5("pepe");
console.log(saludoES5.hola());


/*------------------------------ ES6 ------------------------------*/


/*Las clases de ES6 es azucar sintactico: una forma de endulzar
la sintaxis para hacerlo mas amigable y facil. Sin embargo,
por debajo sigue funcionando de la misma forma.*/

class SaludoES6{
    constructor(nombre){
        this.nombre = nombre;
    }
    hola(){
        return `Hola, ${this.nombre}`;
    }
}
/*Usamos un "class", luego un constructor que recibe el parámetro "nombre",
que se le asigna a la propiedad "nombre" de la clase, y luego el método
"hola" que devuelve la cadena.*/

const saludoES6 = new SaludoES6("pepe");
console.log(saludoES6.hola());

/* Extender una clase */

class ProtocoloES6 extends SaludoES6 {
    adios(){
        return `Adios, ${this.nombre}`;
    }
}
const protocoloES6 = new ProtocoloES6("pepe");
console.log(protocoloES6.hola());
console.log(protocoloES6.adios());


/*------------------ Conclusión --------------------------------------*/

/* podemos modificar la cadena proptitpica de cualquier objeto o clase,
por ejemplo: */

const nombre = "lorena";

String.prototype.capitalize = function(){
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

const apellido = "ORELLANA";

console.log(nombre.capitalize());
console.log(apellido.capitalize());

/* Añado un nuevo método a la clase String.
Cualquier String que yo defina dentro de mi codigo tiene un nuevo
método llamado "capitalize" que conveirte la primera leetra en mayuscula*/

/*Se recomienda no usarlo, y si lo usamos que sea en un scope privado,
que no afecte a nadie mas*/