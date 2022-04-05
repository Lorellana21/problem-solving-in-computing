const users = require('./users.json');


// Obtener el array de usuarios pero con los números de sus direcciones en
// formato de número (y no de cadena que es como está ahora mismo)


const newArray = [];
for (const user in users) {
    //let result = users[user] = parseInt(users[user], 10);
    //console.log(result);

    Object.keys(users[user]);
    Object.values(users[user]);
    newArray.push(Object.entries(users[user]));

}


const address = users.map(user => user.address);
console.log(address)
const numbers = [];
for (const item in address) {
    numbers.push(address[item])

}
console.log(numbers)

