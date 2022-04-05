const users = require('./users.json');

// Obtener un array con los teléfonos de los usuarios cuyo website
// pertenezca a un dominio biz

const result = [];

const bizWebsite = users.filter(user => user.website === ".biz");

console.log(bizWebsite);



let newArray = [];
let filterValue = "biz";

for (let user in users) {
    if (users[user].includes === filterValue) {
        newArray.push(users[user]);
    }
}
console.log(newArray);



