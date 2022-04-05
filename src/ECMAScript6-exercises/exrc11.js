//Dado un array de cadenas, obtenga un objeto que tenga como claves cada
// una de las cadenas y cada uno de los valores de esas claves sea false


const keys = ['key1', 'key2', 'key3'];


const obj = {}
for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = false;
}
console.log(obj);