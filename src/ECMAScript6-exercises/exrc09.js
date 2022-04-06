const users = require('./users.json');

// Obtener un array con los teléfonos de los usuarios cuyo website
// pertenezca a un dominio biz



//1: filter users with biz domain website
const usersWithBizDomain = users.filter(user =>
    user.website != null && user.website.includes("biz"));

//2: get an array with their phones
const usersPhones = usersWithBizDomain.map((user) => user.phone);
console.log(usersPhones)
