'use strict';

const gridPosBase = [[1, 1], [4, 1], [2, 2], [6, 2], [5, 3], [1, 4], [4, 4], [3, 5], [6, 5]];

const messageArray = [
  ['l', 'r', 'ó', 'a', "o", "n"],
  ['.', ' ', 's', 'g', " ", "s"],
  ['d', 'e', 'r', 's', "o", "i"],
  ['l', 'd', 's', 'u', ".", ":"],
  ['.', 'c', 'c', ' ', "k", "i"],
  ['o', 'm', 'a', 'm', "i", "i"],
];

const gridPoseArray = [
  [1.1, 2.1, 3.1, 4.1, 5.1, 6.1],
  [1.2, 2.2, 3.2, 4.2, 5.2, 6.2],
  [1.3, 2.3, 3.3, 4.3, 5.3, 6.3],
  [1.4, 2.4, 3.4, 4.4, 5.4, 6.4],
  [1.5, 2.5, 3.5, 4.5, 5.5, 6.5],
  [1.6, 2.6, 3.6, 4.6, 5.6, 6.6],

];



//Find letters
const findPositions = (array) => {
  console.log(array[0][0], array[0][3], array[1][1], array[1][5], array[2][4], array[3][0], array[3][3], array[4][2], array[4][5])
}
findPositions(gridPoseArray);
findPositions(messageArray)


//90 degrees rotation
const rotateArray = (array) => {
  let newRow = [];
  const newArray = [];

  array.reverse();

  for (let row = 0; row < array.length; row++) {
    newRow = [];
    for (let col = 0; col < array[row].length; col++) {
      newRow.push(array[col][row]);
    }
    newArray.push(newRow);
  }
  return newArray;
};



//First rotation
const firstRotation = rotateArray([...gridPoseArray]);
//Find letters
const findPositionsFirstRotation = (array) => {
  console.log(array[0][2], array[0][5], array[1][4], array[2][1], array[3][2], array[3][5], array[4][3], array[5][1], array[5][4])
}
findPositionsFirstRotation(firstRotation)
findPositionsFirstRotation(messageArray)


//Second rotation
const secondRotation = rotateArray([...firstRotation]);
//Find letters
const findPositionsSecondRotation = (array) => {
  console.log(array[1][0], array[1][3], array[2][2], array[2][5], array[3][1], array[4][0], array[4][4], array[5][2], array[5][5])
}
findPositionsSecondRotation(secondRotation)
findPositionsSecondRotation(messageArray)


//Third rotation
const thirdRotation = rotateArray([...secondRotation]);
//Find letters
const findPositionsThirdRotation = (array) => {
  console.log(array[0][1], array[0][4], array[1][2], array[2][0], array[2][3], array[3][4], array[4][1], array[5][0], array[5][3])
}
findPositionsThirdRotation(thirdRotation)
findPositionsThirdRotation(messageArray)






console.log('0 grados', gridPoseArray);
console.log('90 grados', firstRotation);
console.log('180 grados', secondRotation);
console.log('270 grados', thirdRotation);











// //crea un array de 6 x 6 y le mete el valor en cada posicion
// var myGrid = [...Array(6)].map(e => Array(6).fill(encriptedMessage));
// console.log(myGrid)

// //para las posiciones
// var myArray = [
//   ["cats", "dogs", "monkeys", "horses"],
//   ["apples", "oranges", "pears", "bananas"]
// ];
// console.log(myArray[0][2]) //returns "monkeys"



// //metodo keys para obtener los indices en un array
