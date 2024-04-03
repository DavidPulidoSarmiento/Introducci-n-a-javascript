var palabra = prompt("Ingrese una palabra:");

console.log("Letras de la palabra introducida, empezando por la última:");

for (var i = palabra.length - 1; i >= 0; i--) {
    console.log(palabra.charAt(i));
}
