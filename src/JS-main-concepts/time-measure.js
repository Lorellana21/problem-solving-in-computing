
const obj = {a:1, b:2, c:3};
//se recomienda sacar las keys del objeto y luego recorrer cada elemento
const keys = Object.keys(obj) 

//Para saber cuanto tarda cada proceso:

console.time("proceso1");
keys.forEach(key => {
    console.log(obj[key])
})
console.timeEnd("proceso1");

console.time("proceso2");
//esta función es equivalente a la anterior pero no se recomienda tanto
for(let el in obj) {
    console.log(obj[el]);
}
console.timeEnd("proceso2");

console.time("proceso3");
for(let i=0; i<100000000; i+=1){
    /*NADA*/
}
console.timeEnd("proceso3");