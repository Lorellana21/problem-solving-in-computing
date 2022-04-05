//Convierta los siguientes bucles usando for of y for in


let a3 = [0, 1, 2, 3, 4, 5];

for (let value of a3) {
    console.log(value);
}



let object3 = {
    a: 1,
    b: 2,
    c: 3
};

let objKeys = Object.keys(object3);
console.log(objKeys)

for (const prop in objKeys) {
    if (object3.hasOwnProperty(objKeys[prop])) {
        console.log(objKeys[prop] + ': ' + object3[objKeys[prop]]);
    }
}
