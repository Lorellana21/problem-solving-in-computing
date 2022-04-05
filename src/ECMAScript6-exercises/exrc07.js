const users = require('./users.json');


// Obtener el array de usuarios pero con los números de sus direcciones en
// formato de número (y no de cadena que es como está ahora mismo)



const addressNumbersToNum = () => {
    return users.filter(user => user.address).map(user => parseInt(user.address.number))
}
console.log(addressNumbersToNum());

console.log(users.map((user) => {
    if (user["address"] != null) {
        return {
            ...user,
            address: {
                ...user["address"],
                number: parseInt(user["address"]["number"])
            }
        }
    } else {
        return user
    }
}));

