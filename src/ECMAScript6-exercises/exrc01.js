const users = require('./users.json');

// Obtener el usuario cuyo teléfono es "024-648-3804"

for (const user in users) {

    if (users[user].phone === "024-648-3804") {
        console.log(`${users[user].name}`);
    }
}


































