//El switch sirve para que entre en un sitio o en otro

const miValor = 2;

switch (miValor){
    case 1:
        console.log("es uno");
        break;
    case 2:
        console.log("es dos");
        break;
    default:
    console.log("es otro valor");
}

/*Pero tiene una potencia extra que normalmente no se suele usar*/

const otroValor = 4;

/*En la condicion en vez de poner una variable que recibe pongo true*/
/*y las condiciones las pongo en los case, de manera que puedo 
meter varias condiciones diferentes con variables diferentes, 
y con prioridades*/

switch (true){ 
    case (miValor === 1):
        console.log("es uno");
        break;
    case (otroValor === 2):
        console.log("es dos");
        break;
    default:
    console.log("es otro valor");
}

/*----- Ahora vamos a usar funciones-----------*/

function one(){
    console.log("is one");
}
function two(){
    console.log("is two");
}
function _default(){
    console.log("is other");
}

//Aqui llamo a la función
switch (true){ 
    case (miValor === 1):
        one();
        break;
    case (otroValor === 2):
        two;
        break;
    default:
        _default();
}

/*----- Igual que arriba pero recibiendo la variable ---------------*/

// switch (miValor){
//         case 1:
//             one();
//             break;
//         case 2:
//             two;
//             break;
//         default:
//             _default();
// }

/*Ahora imaginamos que tenemos 100 posibilidades, 
queremos ahorrarnos los if y los switch*/

//Declaro un array de funciones
const fun = [_default, one, _default, two];//en este array puedo poner 100 elementos, llamando a los metodos que necesite

//Ahora en vez de usar el switch, llamo a "fun" de "miValor"
if (miValor > 3){
    _default;
} else {
    fun[miValor]();
}

