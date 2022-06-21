//Hoisting en ES5
/*Hoisting = Elevación*/


console.log(variableES5);
var variableES5 = 5;

/*Si tengo una variable con "var" y la declaro
posteriormente a ser llamada, JavaScript subre hacia arriba la 
declaración de la variable y le asigna el valor de "undefined", 
y no da error en consola.
*/

/*Estaría haciendo esto internamente:
var variableES5; 
console.log(variableES5);
var variableES5 = 5;
*/



//Hoisting en ES6

console.log(variableES6);
let variableES6 = 5;

/*
Con "const" y "let" aparece un error en consola
El hoisting se hace de forma diferente, se declara la variable
pero no se inicializa, es decir,se queda en la zona muerta temporal 
pero sin valor.
*/

/* Actúa de esta forma:
const variableES6; //la variable existe, está en memoria
console.log(variableES6);
let variableES6 = 5;
*/


/*video Sacha:
https://www.youtube.com/watch?v=uI6o97A4IrI&list=PLfWyZ8S-Xzee_Wt1hf8D2i4zG_WFt3b0K&index=5
*/