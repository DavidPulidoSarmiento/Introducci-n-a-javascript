var numero = parseInt(prompt("Ingrese un número entero positivo:"));

if (numero <= 0 || isNaN(numero)) {
    console.log("Debe ingresar un número entero positivo.");
} else {
    var cuentaAtras = "";

    for (var i = numero; i >= 0; i--) {
        if (cuentaAtras === "") {
            cuentaAtras += i;
        } else {
            cuentaAtras += ", " + i;
        }
    }

    console.log("Cuenta atrás desde " + numero + " hasta 0:");
    console.log(cuentaAtras);
}
