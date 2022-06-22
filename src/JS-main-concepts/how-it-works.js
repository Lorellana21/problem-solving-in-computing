/*JavaScript se ejecuta en un solo proceso/hilo, 
hasta que no ejecuta una orden no pasa a la siguiente.
Si algún proceso (orden, por ejemplo un blucle) se queda mucho tiempo bloqueado, 
el navegador se queda bloqueado y no podemos interactuar con él,
pues el hilo ppal está bloqueado
*/


console.log("INICIO"); //hasta que no ejecuta esta orden no pasa a la siguiente

for (var counter = 0; counter < 5; counter ++) {
    setTimeout(function() {
        console.log(counter);
    }, counter * 1000);
}
console.log("FIN");

/*Cada sentencia a ejecutar pasa al Call stack (pila de llamadas), que es 
como el bote de Pringles, la primera en entrar es la ultima en salir*/

/*Event Loop: proceso de JS que está recorriendo todo el tiempo para ver
qué sentencia el Call stack le toca ejecutar.*/

/*Cola de Callback: explicado en SetTimeOut.js*/

/*Cola de Micro Tareas: ahí van las funciones que se ejecutan con las promesas. 
Tiene prioridad sobre la cola de Call back*/

//Todos estos son sitios distintos que tiene el motor de JS para ejecutar JavaScript.