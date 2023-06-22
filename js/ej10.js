// 10. Crea un array de números de un tamaño pasado por prompt, el array contendrá números
// aleatorios primos entre los números deseados, por último, nos indica cuál es el mayor
// de todos. Haz un método para comprobar que el número aleatorio es primo, puedes
// hacer todos los métodos que necesites

const isPrime = number => {

    let divCounter = 0;

    for (let i = 0; i <= number; i++) {
		if (number % i == 0) {
			divCounter++;
		}
	}

    return divCounter == 2;
}

const isArrayFilled = (array, length) => {
    return array.length == length;
}

const createRandomPrimeNumbers = (amountNumbers, minNumber, maxNumber) => {

    minNumber = Math.ceil(minNumber);
    maxNumber = Math.floor(maxNumber);

    let numbers = [];

    while (!isArrayFilled(numbers, amountNumbers)) {

        number = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);

        if (isPrime(number)) {
            numbers.push(number);
        }
    }

    return numbers;
}

const biggestNumber = array => {

    let biggestNumber = Number.MIN_VALUE;

    array.forEach(number => {

        if (number >= biggestNumber) {
            biggestNumber = number;
        }

    });

    return biggestNumber;
}

let amountNumbers = prompt('Indica la cantidad de números que deseas generar.');
let minNumber = prompt('Indica el valor mínimo del rango de numeros a generar');
let maxNumber = prompt('Indica el valor máximo del rango de numeros a generar');

let numbers = createRandomPrimeNumbers(amountNumbers, minNumber, maxNumber);
console.log(numbers);
console.log(biggestNumber(numbers));