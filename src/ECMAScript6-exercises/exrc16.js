//Simplifique este objeto usando sintaxis ES6


let prop1 = "value1";
let prop2 = 'value2';

let object1 = {
    prop1,
    prop2,

    function1(param) {

        if (typeof param == 'undefined') {
            param = 1;
        }

        console.log(param);
    }
};

console.log(object1);
