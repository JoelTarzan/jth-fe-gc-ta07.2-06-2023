// 12. Crea un array de números de un tamaño pasado por prompt, el array contendránúmeros
// aleatorios entre 1 y 300 y mostrará aquellos números que acaben en un dígito que
// nosotros le indiquemos por prompt (debes controlar que se introduce un número
// correcto), estos deben guardarse en un nuevo array. Por ejemplo, en un array de 10
// posiciones le indicamos mostrar los números acabados en 5, podría salir 155, 25, etc.

const createRandomNumbers = (amountNumbers, minNumber, maxNumber) => {

    minNumber = Math.ceil(minNumber);
    maxNumber = Math.floor(maxNumber);

    let numbers = [];

    for (let i = 0; i < amountNumbers; i++) {
        
        number = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
        numbers.push(number);
    }

    return numbers;
}

const isOneIntegerDigit = digit => {
    return !(isNaN(digit) || digit.toString().length != 1 || digit < 0);
}

const arrayWithLastDigit = (array, lastDigit) => {

    let newArray = [];

    array.forEach(number => {
        
        let numberString = number.toString();

        if (numberString.charAt(numberString.length - 1) == lastDigit.toString()) {
            newArray.push(number);
        }

    });

    return newArray;
}

let amountNumbers = prompt('Indica la cantidad de números que deseas generar.');
let lastDigit = parseInt(prompt('Indica el dígito con el que quieres que acaben los números. (Solo un número entero positivo)'));

while (!isOneIntegerDigit(lastDigit)) {

    alert('El número indicado no es correcto.');
    lastDigit = parseInt(prompt('Indica el dígito con el que quieres que acaben los números.'));

    isOneIntegerDigit(lastDigit);
}

let numbers = createRandomNumbers(amountNumbers, 1, 300);
let newArray = arrayWithLastDigit(numbers, lastDigit);

console.log('Lista de números aleatorios: ' + numbers);
console.log('Último dígito seleccionado: ' + lastDigit);
console.log('Lista de números con el último dígito elegido: ' + newArray);