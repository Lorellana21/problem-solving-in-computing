/*El objeto Map sirve para tener pares de clave: valor */


const miMap = new Map([[1, "a"], [2, "b"], [3, "c"]]);

//console.log(miMap);



/*Añadir un elemento al map*/
miMap.set(4, "d");
console.log(miMap);

/*Obtener un valor*/
console.log(miMap.get(2));

