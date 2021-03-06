const users = require('./users.json');

/*Obtener el número de usuarios que tienen website*/

//the solution
const numUsersWithWebsite = users.filter(u => u.website).length;
console.log(numUsersWithWebsite)


//my solution
//1: filter users with website
const usersWithWebsite = users.filter(user =>
    user.website != null);

//2: get the lenght of the new array of users with website
console.log(usersWithWebsite.length)



