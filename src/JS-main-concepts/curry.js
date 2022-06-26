//Función en la que puedo recibir otra función "CURRIFICACIÓN"
function multiplication (a) {
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

/*Utilidad para calcular el doble*/

const double = multiplication(2);//tengo una función que se llama "double"
console.log(double(3));//pasándole cualquier valor me devuelve su doble
console.log(double(5));

//Otra utilidad: tener preparado algo donde solo necesite el último valor:

const triple = multiplication(3);
console.log(triple(4));
/*Estoy reutilizando código de forma inteligente para poder calcular 
distintos valores (dobles, triples, ...), simplemente recibiendo un solo valor,
pero sin tener que estar modificando o añdiendo funciones, 
uso una sola función "multiplication"*/