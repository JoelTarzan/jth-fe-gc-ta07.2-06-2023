// 11. Crea dos arrays de números con la dimensión pasada por teclado. Uno de ellos estará
// rellenado con números aleatorios y el otro apuntará al array anterior, reasigna los valores
// del segundo array con valores aleatorios. Después, crea un método que tenga como
// parámetros, los dos arrays y devuelva uno nuevo con la multiplicación de la posición 0
// del array1 con el del array2 y así sucesivamente. Por último, muestra el contenido de
// cada array

const createRandomNumbers = (amountNumbers, minNumber, maxNumber) => {

    minNumber = Math.ceil(minNumber);
    maxNumber = Math.floor(maxNumber);

    numbers = [];

    for (let i = 0; i < amountNumbers; i++) {
        
        number = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
        numbers.push(number);
    }

    return numbers;
}

const createRandomNumbersInExistentArray = (amountNumbers, minNumber, maxNumber, array) => {

    minNumber = Math.ceil(minNumber);
    maxNumber = Math.floor(maxNumber);

    for (let i = 0; i < amountNumbers; i++) {
        
        number = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
        array.push(number);
    }

    return array;
}

const productOfTwoArrays = (arrayOne, arrayTwo) => {

    let arrayThree = [];

    for (let i = 0; i < arrayOne.length; i++) {
        
        result = arrayOne[i] * arrayTwo[i];
        arrayThree.push(result);
    }

    return arrayThree;
}

let amountNumbers = prompt('Indica la cantidad de números que deseas generar.');
let minNumber = prompt('Indica el valor mínimo del rango de numeros a generar');
let maxNumber = prompt('Indica el valor máximo del rango de numeros a generar');

let arrayOne = createRandomNumbers(amountNumbers, minNumber, maxNumber);
let arrayTwo = arrayOne;

arrayTwo = createRandomNumbers(amountNumbers, minNumber, maxNumber);

let arrayThree = productOfTwoArrays(arrayOne, arrayTwo);

console.log('Array 1: ' + arrayOne);
console.log('Array 2: ' + arrayTwo);
console.log('Array 3: ' + arrayThree);