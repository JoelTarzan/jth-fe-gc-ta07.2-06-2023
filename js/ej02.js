// 2. Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados
// por el usuario (prompt). Crea un método donde pasamos como parámetros entre entre
// qué números queremos que los genere, podemos pedirlas al usuario antes de generar
// los números. Este método devolverá un número entero aleatorio. Muestra estos
// números por consola.

let amountNumbers = prompt('Indica la cantidad de números que deseas generar.');
let minNumber = prompt('Indica el valor mínimo del rango de numeros a generar');
let maxNumber = prompt('Indica el valor máximo del rango de numeros a generar');

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

const getRandomNumber = listOfNumbers => {

    number = Math.floor(Math.random() * listOfNumbers.length);
    return listOfNumbers[number];
}

let listOfNumbers = createRandomNumbers(amountNumbers, minNumber, maxNumber);
let randomNumber = getRandomNumber(listOfNumbers);

console.log('La lista de números aleatorios es: ' + listOfNumbers);
console.log('El número aleatorio es: ' + randomNumber);