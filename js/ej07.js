// 7. Crea una aplicación que nos convierta una cantidad de euros introducida por prompt a
// otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
// parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
// devolverá ningún valor, mostrará un mensaje indicando el cambio.
// El cambio de divisas es:
// • 0.86 libras es un 1 €
// • 1.28611 $ es un 1 €
// • 129.852 yenes es un 1 €

let amount = prompt('Porfavor indique la cantidad de euros.');

while (isNaN(amount)) {

    alert('Porfavor introduzca una cantidad de dinero correcta.');
    amount = prompt('Porfavor indique la cantidad de euros.');
}

let currency = prompt('Porfavor indique la moneda a la que desea pasar (dolares, yenes o libras)');
currency = currency.toLowerCase();

const eurosConverter = (amount, currency) => {

    switch (currency) {
        case 'dolares':
            
            console.log(amount + ' euros equivale a ' + amount * 1.28611 + ' dólares');
            break;
    
        case 'yenes':
            
            console.log(amount + ' euros equivale a ' + amount * 129.852 + ' yenes');
            break;


        case 'libras':
            
            console.log(amount + ' euros equivale a ' + amount * 0.86 + ' libras');
            break;

        default:

            alert('Moneda introducida incorrecta');
            break;
    }
}

eurosConverter(amount, currency);