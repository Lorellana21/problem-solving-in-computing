'use strict';

const unique = (array) => {
    //creo un nuevo array vacío que será mi nuevo array libre de duplicados
    let result = [];
    //recorro mi array "data"
    for (let i = 0; i < array.length; i++) {
        //está ya el numero en al nuevo array?
        //si está el número entonces no lo quiero
        //entonces solo lo voy a incluir si no estaba ya
        if (!result.includes(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}


const data = [1, 2, 1, 2, 3, 4, 4, 7, 8, 9];

console.log(unique(data));
