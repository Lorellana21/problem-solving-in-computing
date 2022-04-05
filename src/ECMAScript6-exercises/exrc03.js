const users = require('./users.json');

//Obtener el número de usuarios que tienen website


let result = 0;
users.forEach((user) => {
    if (user.website != undefined) {
        result++;
        console.log(result);
    }
})

