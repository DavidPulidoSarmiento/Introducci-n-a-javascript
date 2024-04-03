var altura = parseInt(prompt("Ingrese un número entero:"));

if (altura <= 0 || isNaN(altura)) {
    console.log("Debe ingresar un número entero positivo.");
} else {
    for (var i = 1; i <= altura; i++) {
        var linea = "";
        for (var j = 1; j <= i; j++) {
            linea += "* ";
        }
        console.log(linea);
    }
}
