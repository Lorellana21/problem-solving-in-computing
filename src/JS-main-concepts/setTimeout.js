/*setTimeout y setInterval no es Javascript, es una API del navegador.
Se usan para hacer cosas pasado un tiempo.
Cada vez que se llama a la función de dentro, esa función va a la cola 
de Callback porque no se ejecuta inmediatamente sino que se ejecuta fuera del 
hilo ppal, en esa cola de Callback, y ahi se queda esperando.
Cuando pase el tiempo previsto, el EventLoop coge esa función y la 
manda a la pila de llamadas*/

/*ES5*/

// console.log("INICIO");
// for (var counter = 0; counter < 5; counter ++) {
//     setTimeout(function() {
//         console.log(counter); 
//     }, counter * 1000);
// }
// console.log(counter);
// console.log("FIN");



/*¿pq sale 5 veces 5??
- por el funcionamiento de "var"
- por cómo funciona el callstack y el callback: las 5 funciones del 
setTimeout las manda a la cola de Callback. Cuando se termina de ejecutar
el bucle, counter tenia el valor de 5, porque el bucle terminó y tiene
el ultimo valor que tiene la variable */


/*ES6*/
console.log("INICIO");
for (let counter = 0; counter < 5; counter ++) {
    setTimeout(function() {
        console.log(counter); 
    }, counter * 1000);
}
console.log(counter);
console.log("FIN");

/*¿pq sale 0, 1, 2, 3, 4?:
Como const y let guardan el scope, cuando se ejecuta la funcion con el 
setTimeout, el console log de counter, aparte de tener ese console log, 
tiene el scope del momento en que se está ejecutando.
Let y const guardan el ámbito cuando se guarda la funcion en la cola.
Let y const solo existen dentro de ese bucle.*/

/*------------------------------------------------------------------*/

/*Truco: cuando tenemos asincronia y queremos ejecutar algo en último lugar, 
si lo metes en una función dentro del setTimeout sabes que se va a ejecutar 
al final del hilo ppal. El tiempo (segundos) empieza a contar desde el momento 
en que hemos declarado el setTimeout. Este tiempo siempre depende del hilo ppal.*/


