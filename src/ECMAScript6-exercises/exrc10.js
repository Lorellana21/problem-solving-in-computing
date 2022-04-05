const users = require('./users.json');

//Escriba una función processArray que, dado un array de números
// enteros, devuelva un nuevo array en que aquellos elementos que
// sean pares se multipliquen por 2.


const testArray = [2, 3, 5, 6, 5, 9, 10, 12, 13];


const processArray = (a) => {

    let pares = testArray.filter((number) => number % 2 === 0);

    let result = pares.map((item) => item * 2);
    return result;
}


console.log(processArray(testArray));

