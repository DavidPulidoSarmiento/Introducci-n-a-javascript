// Definir el valor de pi
const pi = Math.PI;

// Solicitar al usuario que ingrese el radio de la esfera
let radio = parseFloat(prompt("Ingrese el radio de la esfera:"));

// Calcular el volumen de la esfera
let volumen = (4 / 3) * pi * radio ** 3;

// Mostrar el resultado por pantalla
alert("El volumen de la esfera es: " + volumen.toFixed(2));
