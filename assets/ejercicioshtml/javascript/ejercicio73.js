var frase = prompt("Ingrese una frase:");
var letra = prompt("Ingrese una letra:");

letra = letra.toLowerCase();

var contador = 0;

for (var i = 0; i < frase.length; i++) {
    if (frase.charAt(i).toLowerCase() === letra) {
        contador++;
    }
}

console.log("La letra '" + letra + "' aparece " + contador + " veces en la frase.");
