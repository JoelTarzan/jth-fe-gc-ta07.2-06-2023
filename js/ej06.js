// 6. Crea una aplicación que nos cuente el número de cifras de un número entero positivo
// (hay que controlarlo) pedido por prompt. Crea un método que realice esta acción,
// pasando el número por parámetro devolverá el número de cifras.

let number = parseInt(prompt('Porfavor indique un número entero positivo.'));

const countDigits = number => {

    numberString = number + '';
    console.log('El número tiene las siguientes cifras: ' + numberString.length);
}

while (isNaN(number) || number <= 0) {

    console.log('Valor incorrecto.');
    number = parseInt(prompt('Porfavor indique un número entero positivo.'));
}

countDigits(number);