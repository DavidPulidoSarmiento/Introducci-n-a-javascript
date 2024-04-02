const pi = Math.PI;

let a = parseFloat(prompt("Ingrese la longitud del semieje 'a' del elipsoide:"));
let b = parseFloat(prompt("Ingrese la longitud del semieje 'b' del elipsoide:"));
let c = parseFloat(prompt("Ingrese la longitud del semieje 'c' del elipsoide:"));

let volumen = (4 / 3) * pi * a * b * c;

alert("El volumen del elipsoide es: " + volumen.toFixed(2));
