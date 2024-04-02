var frase = prompt("Ingrese una frase:");

function invertirFrase(frase) {
    return frase.split("").reverse().join("");
}

var fraseInvertida = invertirFrase(frase);

console.log("La frase invertida es: " + fraseInvertida);
