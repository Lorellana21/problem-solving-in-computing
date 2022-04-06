const users = require('./users.json');


// Obtener el usuario cuyo teléfono es "024-648-3804"

for (const user in users) {

    if (users[user].phone === "024-648-3804") {
        console.log(`${users[user].name}`);
    }
}


//extraer datos: crear otro array solo con los nombres

const names = users.map(user => user.name);
console.log(names)

//mejora: en vez de repetir la palabra "user", si lo que en realidad nos
//importa es el "name", desarmamos el parámetro recibido(user) y obtenemos solo
//la propiedad "name"

const namesImproved = users.map(({ name }) => name);
console.log(namesImproved)
//los paréntesis son para poder desarmar el parámetro y obtener su propiedad

//igual funciona con filter
const filter = users.filter(({ id }) => id < 3);
console.log(filter)






























