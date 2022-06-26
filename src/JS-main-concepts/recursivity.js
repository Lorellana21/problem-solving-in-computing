function uno(valor){
    uno(valor);
}
uno(3);
//Hay que tener cuidado por que puede exceder el espacio de call Stack

/*Nos solemos cargar el Call stack cuando creamos componentes y les
metemos eventos (un addEventListener por ejemplo), pero no se lo 
quitamos cuando el elemento se borra. Aunque borremos el componente 
pero en su cilo de vida no eliminamos el addEventListener,
ese addEventListener va a seguir ahi, y se van a ir acumulando*/