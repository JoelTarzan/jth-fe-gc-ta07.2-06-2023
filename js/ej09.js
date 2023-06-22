// 9. Crea un array de números donde le indicamos por prompt el tamaño del array,
// rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola el
// valor de cada posición y la suma de todos los valores. Tareas a realizar: Haz un método
// para rellenar el array(que tenga como parámetros los números entre los que tenga que
// generar) y otro para mostrar el contenido y la suma del array.

const fillArray = (minValue, maxValue) => {

    let lengthArray = prompt('Inidca el tamaño de la lista de números');

    let numbers = [];

    for (let i = 0; i < lengthArray; i++) {
        
        number = Math.floor(Math.random() * (maxValue - minValue) + minValue);
        numbers.push(number);
    }

    return numbers;
}

const readAndSumArray = array => {
    
    sum = 0;

    array.forEach(number => {
        sum += number;
    });

    console.log(array);
    console.log('Suma: ' + sum);
}

let array = fillArray(0, 9);
readAndSumArray(array);