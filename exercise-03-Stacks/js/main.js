import { Stack } from "@datastructures-js/stack";


const balanced = (input) => {

    let stack = new Stack();//Creo la pila

    for (let i = 0; i < input.length; i++) {//Recorremos la expresión
        let x = input[i];
        if (x === "[") {//Si es de apertura apilamos siempre
            stack.push(x);

        } else if (x === "]") {//Si es de cierre actuamos según el caso
            if (!stack.isEmpty()) {//si la pila no está vacía, desapilamos
                stack.pop()
            } else {
                stack.push(x);//Si está vacía apilamos
            }

        }
    }

    if (stack.isEmpty()) {
        return true;
    } else {
        return false;
    }
}



let test1 = "This a test (detailing [balanced] brackets)";
console.log(test1, "=>", balanced(test1));

let test2 = "This a test (detailing [unbalanced brackets)";
console.log(test2, "=>", balanced(test2));