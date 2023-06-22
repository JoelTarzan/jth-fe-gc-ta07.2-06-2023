// 8. Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra
// por consola el índice y el valor al que corresponde. Haz dos métodos, uno para rellenar
// valores y otro para mostrar.

const fillArray = array => {

    for (let i = 0; i < 10; i++) {
    
        let number = prompt('Indica el número ' + (i+1) + '/10');
        array.push(number);
    }

    return array;
}

const readArray = array => {
    console.log(array);
}

let numbers = [];

fillArray(numbers);
readArray(numbers);