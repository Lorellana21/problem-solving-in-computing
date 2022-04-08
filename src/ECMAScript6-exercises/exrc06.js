const users = require('./users.json');

/*Obtener un array que contengan objetos {id: "id", username: "username"},
que contienen los ids y los nombres de usuarios de los usuarios*/

//the solution
const usersIdUsername = users.map(u => ({
    id: u.id,
    username: u.username
}));
console.log(usersIdUsername)

//my solution
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






