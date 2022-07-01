 const iterable1 = new Map([[1, "a"], [2, "b"], [3, "c"]]);

for(let element of iterable1){
    console.log(`${element}`);
}

const myArray = [1, 2, 4, 3, 2, 1, 2, 3, 1, 4, 1, 2, 4, 5, 3, 2, 2];
const iterable2 = new Set(myArray);

for(let element of iterable2){
    console.log(`${element}`);
}

/*---------------------Recorrer un array de arrays -------------*/
/*Necesito dos bucles for para poder recorrer la matriz. 
Donde el primero recorrerá el array principal y el segundo 
recorrerá cada uno de los array secundarios. */
const matriz = [[1,2,3],[4,5,6],[7,8,9]];

/*Los dos bucles concatenados quedan de la siguiente forma:*/
for (let x = 0; x < matriz.length; x++) {
    for (let y = 0; y < matriz[x].length; y++) {
        console.log(matriz[x][y]);
    }
}

//recorro el array global y obtengo los arrays interiores:
for (let i = 0; i < matriz.length; i++){
  let globalArray = matriz[i];
  console.log(globalArray);
  //recorro los arrays interiores y obtengo los elementos
  for (let j = 0; j < globalArray.length; j++){
    let element = globalArray[j];
    console.log(element)
  }
}