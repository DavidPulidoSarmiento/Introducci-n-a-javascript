var numero = parseInt(prompt("Ingrese un número entero positivo:"));

if (numero <= 0 || isNaN(numero)) {
    console.log("Debe ingresar un número entero positivo.");
} else {
    var impares = "";

    for (var i = 1; i <= numero; i++) {
        if (i % 2 !== 0) {
            if (impares === "") {
                impares += i;
            } else {
                impares += ", " + i;
            }
        }
    }

    console.log("Números impares desde 1 hasta " + numero + ":");
    console.log(impares);
}
