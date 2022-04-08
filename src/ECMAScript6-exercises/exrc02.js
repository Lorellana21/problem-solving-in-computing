const users = require('./users.json');

/*Crear una función que devuelva true si existe un usuario cuyo email
sea el que se pasa como parámetro*/

//the solution
const existsUser = email => users.some(u => u.email === email);


//my solution
// const existsUser = email => {
//     for (const user in users) {


//         if (users[user].email === email) {
//             console.log(`${users[user].email} is true`);

//         } else {
//             console.log("this email is false")
//         }

//     };
// }



console.log(existsUser("Nathan@yesenia.net")); // true
console.log(existsUser('japostigo@atsistemas.com')); // false