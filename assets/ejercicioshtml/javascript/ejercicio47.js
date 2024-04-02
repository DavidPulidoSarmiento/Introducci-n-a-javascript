var numero1 = parseFloat(prompt("Ingrese el primer número:"));
var numero2 = parseFloat(prompt("Ingrese el segundo número:"));
var numero3 = parseFloat(prompt("Ingrese el tercer número:"));

function calcularMayor(numero1, numero2, numero3) {
    return Math.max(numero1, numero2, numero3);
}

function calcularMenor(numero1, numero2, numero3) {
    return Math.min(numero1, numero2, numero3);
}

var mayor = calcularMayor(numero1, numero2, numero3);
var menor = calcularMenor(numero1, numero2, numero3);

var sonIguales = numero1 === numero2 && numero2 === numero3;

if (sonIguales) {
    console.log("Los tres números ingresados son iguales.");
} else {
    console.log("El mayor de los tres números ingresados es: " + mayor);
    console.log("El menor de los tres números ingresados es: " + menor);
}
