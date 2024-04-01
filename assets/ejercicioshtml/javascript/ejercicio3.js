var dividendo = parseFloat(prompt("Ingrese el dividendo"));
var divisor = parseFloat(prompt("Ingrese el divisor"));

if (divisor === 0) {
    throw new Error("¡Error! El divisor no puede ser cero.");
}

var rta = dividendo / divisor;
alert("El resultado de la division es: " + rta);
