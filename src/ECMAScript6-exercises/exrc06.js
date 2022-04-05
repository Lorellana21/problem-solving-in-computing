const users = require('./users.json');

//Obtener un array que contengan objetos {id: "id", username: "username"},
// que contienen los ids y los nombres de usuarios de los usuarios



const createPerson = (id, username) => {

    return {
        id,
        username
    };

};
const array = [];
for (const user in users) {
    array.push(createPerson(users[user].id, users[user].username))

}

console.log(array);






