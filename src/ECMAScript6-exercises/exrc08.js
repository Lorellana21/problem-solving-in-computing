const users = require('./users.json');

/*Obtener el array de usuarios cuya dirección está ubicada entre la
latitud -50 y 50, y la longitud -100 y 100*/

//the solution
const usersLatLng = users.filter(u => u.address &&
    -50 < +u.address.geo.lat && +u.address.geo.lat < 50 &&
    -100 < +u.address.geo.lng && +u.address.geo.lng < 100);
console.log(usersLatLng)








