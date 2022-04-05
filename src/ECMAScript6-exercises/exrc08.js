const users = require('./users.json');

//Obtener el array de usuarios cuya dirección está ubicada entre la
// latitud -50 y 50, y la longitud -100 y 100

const usersArrayGeo = [];

const address = users.map(user => user.address);
console.log(address)



for (const user in users) {
    console.log(users[user].address)

}

