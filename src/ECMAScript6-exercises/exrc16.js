/*Simplifique este objeto usando sintaxis ES6*/

//the solution
const prop2 = 'value2';

const object1 = {

  prop1: 'value1',

  prop2,

  function1: (param = 1) => {
    console.log(param);
  }
};

console.log(object1.prop1);
console.log(object1.prop2);

object1.function1();





