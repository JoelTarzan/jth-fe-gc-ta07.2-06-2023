// 5. Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo
// realizará un método al que le pasaremos el número como parámetro, devolverá un
// String con el número convertido a binario. Para convertir un número decimal a binario,
// debemos dividir entre 2 el número y el resultado de esa división se divide entre 2 de
// nuevo hasta que no se pueda dividir más, el resto que obtengamos de cada división
// formará el número binario, de abajo a arriba.

let number = prompt('Indica que número quieres pasar a binario');

const decimalToBinary = number => {

    let binaryArray = [];

    while (number > 0) {

        binaryArray.unshift(number % 2);
        number = Math.floor(number / 2);
    }

    return binaryArray.join('');
}

console.log(decimalToBinary(number));