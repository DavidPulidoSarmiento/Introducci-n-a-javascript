var numero1 = parseFloat(prompt("Ingrese el primer número:"));
var numero2 = parseFloat(prompt("Ingrese el segundo número:"));
var numero3 = parseFloat(prompt("Ingrese el tercer número:"));

function calcularMayor(numero1, numero2, numero3) {
    var mayor = numero1;

    if (numero2 > mayor) {
        mayor = numero2;
    }

    if (numero3 > mayor) {
        mayor = numero3;
    }

    return mayor;
}

var mayor = calcularMayor(numero1, numero2, numero3);

console.log("El mayor de los tres números ingresados es: " + mayor);
