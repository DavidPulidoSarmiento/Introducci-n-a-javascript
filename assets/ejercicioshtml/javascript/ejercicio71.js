var numero = parseInt(prompt("Ingrese un número entero positivo mayor que 1:"));

var esPrimo = true;

if (numero <= 1 || isNaN(numero)) {
    console.log("Debe ingresar un número entero positivo mayor que 1.");
} else {
    for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
}

if (esPrimo) {
    console.log(numero + " es un número primo.");
} else {
    console.log(numero + " no es un número primo.");
}
