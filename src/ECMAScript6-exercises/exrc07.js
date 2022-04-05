const users = require('./users.json');


// Obtener el array de usuarios pero con los números de sus direcciones en
// formato de número (y no de cadena que es como está ahora mismo)



const addressNumbersToNum = () => {
    return users.filter(user => user.address).map(user => parseInt(user.address.number))
}
console.log(addressNumbersToNum());


/*--------------------------------------------------*/

console.log(users.map((user) => {
    if (user["address"] != null) {
        return {
            ...user,//copiamos las propiedades del objeto original, se crea un nuevo "user"
            address: {
                ...user["address"],//copiamos las propiedades del objeto original
                number: parseInt(user["address"]["number"])//modificamos su precio
            }
        }
    } else {
        return user
    }
}));

