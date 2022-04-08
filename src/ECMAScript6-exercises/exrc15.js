/*Declare las variables convenientemente*/


const PI = 3.14;

const getCircleArea = r => PI * r * r;

for(let i = 1; i <= 3; i++) {
    console.log(`r = ${i}, area = ${getCircleArea(i)}`);
  }
  
