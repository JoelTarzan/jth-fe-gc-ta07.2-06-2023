// 1. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
// Pediremos al usuario que figura queremos calcular su área y según lo introducido pedirá
// los valores necesarios para calcular el área. Para ello has de crear un método por cada
// figura para calcular cada área, este devolverá un número real. Muestra el resultado por
// consola.
// Aquí te mostramos que necesita cada figura:
// • Circulo: (radio^2)*PI
// • Triangulo: (base * altura) / 2
// • Cuadrado: lado * lado

let figure = prompt('Indica la figura que quieras calcular el área: (circulo, triangulo, cuadrado)');
figure = figure.toLowerCase();

const circleArea = radius => {
    return (radius**2) * Math.PI;
}

const TriangleArea = (base, height) => {
    return (base * height) / 2;
}

const SquareArea = side => {
    return side * side;
}

switch (figure) {
    case 'circulo':
        
        let radius = prompt('Indica el radio del círculo (m)');
        console.log(circleArea(radius) + ' m2');

        break;

    case 'triangulo':

        let base = prompt('Indica la base del triangulo (m)');
        let height = prompt('Indica la altura del triangulo (m)');
        console.log(TriangleArea(base, height) + ' m2');

        break;

    case 'cuadrado':
        
        let side = prompt('Indica el lado del cuadrado (m)');
        console.log(SquareArea(side) + ' m2');

        break;

    default:
        alert('Valor introducido incorrecto');

        break;
}