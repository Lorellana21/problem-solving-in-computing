/*Funciones de orden superior: 
funciones que permiten tener en sus parametros otras funciones,
por ejemplo el setTimeou, pues es una funcion y dentro le paso otra funcion*/

//Función normal
function multiply (a, b) {
    console.log( a* b);
}
console.log(multiply(2, 4));

//Función en la que puedo recibir otra función "CURRIFICACIÓN"
function multiplication (a){
    return function executeMultiplication(b) {
        return a * b
    }
}
console.log(multiplication(3));//es una función que devuelve la función "executeMultiplication"
console.log(multiplication(3)(4));/*ahora la llamo para que ejecute la funcion 
que recibe un parámetro, yo vuelvo a llamar a la funcion enviandole ese parametro.
La funcion de dentro entiende el valor de "a" porque esta dentro de "multiplication", en el mismo scope*/

const valor = multiplication(3)(4);
console.log(valor);