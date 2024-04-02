let regex = /^-?\d+(\.\d+)?(e-?\d+)?$/;

function esNumeroEnPuntoFlotante(cadena) {
    return regex.test(cadena);
}

let ejemplos = ["2.3e-1", "-3e2", "23", "3.2", "abc", "1.23abc", "-2.e-3"];

ejemplos.forEach(function(ejemplo) {
    console.log(ejemplo + ": " + esNumeroEnPuntoFlotante(ejemplo));
});
