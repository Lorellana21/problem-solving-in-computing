const users = require('./users.json');

//Obtener un array que sólo contenga las cadenas de los emails de los usuarios

const emails = [];
for (const user in users) {
    emails.push(users[user].email);
}
console.log(emails)