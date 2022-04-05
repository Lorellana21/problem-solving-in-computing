
const users = require('./users.json');

// Obtener el índice de la posición que toma en el array el primer usuario
// cuyo número de la calle de su dirección es menor que 300



const address = users.map(user => user.address);

const addressFound = address.find(el => el.number < 300)


const index = users.findIndex(element => element.address === addressFound);
console.log(index)




