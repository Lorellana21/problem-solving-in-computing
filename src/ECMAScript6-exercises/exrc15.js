//Declare las variables convenientemente


const PI = 3.14;

function getCircleArea(r) {
    return PI * r * r;
}

for (let i = 1; i <= 3; i++) {
    console.log('r = ' + i + ', area = ' + getCircleArea(i));
}
