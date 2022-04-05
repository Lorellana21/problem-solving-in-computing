const users = require('./users.json');

//Obtener el array de usuarios cuya dirección está ubicada entre la
// latitud -50 y 50, y la longitud -100 y 100






//const address = users.map((user) => user.address)

const result = users.map(user => {
    if (user["address"] != null) {
        if (user.address["geo"]["lat"] > -50 &&
            user.address["geo"]["lat"] < 50 &&
            user.address["geo"]["lng"] > -100 &&
            user.address["geo"]["lng"] < 100) {
            return user.address["geo"]["lat"] &&
                user.address["geo"]["lng"]

        }
    }
})


console.log(result)




