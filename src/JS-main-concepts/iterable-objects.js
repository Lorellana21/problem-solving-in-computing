const iterable1 = new Map([[1, "a"], [2, "b"], [3, "c"]]);

for(let element of iterable1){
    console.log(`${element}`);
}

const myArray = [1, 2, 4, 3, 2, 1, 2, 3, 1, 4, 1, 2, 4, 5, 3, 2, 2];
const iterable2 = new Set(myArray);

for(let element of iterable2){
    console.log(`${element}`);
}