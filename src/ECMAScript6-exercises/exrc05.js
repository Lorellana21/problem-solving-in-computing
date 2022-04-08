const users = require('./users.json');

/*Obtener un array que sólo contenga las cadenas de los emails de los usuarios*/

//the solution
const usersEmails = users.map(u => u.email);

//my solution
const emails = [];
for (const user in users) {
    emails.push(users[user].email);
}
console.log(emails)

//better option:
const onlyEmails = users.map(({ email }) => email)
//esta sintaxis de paréntesis y llaves significa que 
//estoy extrayendo un valor de los elementos de un array
console.log(onlyEmails)