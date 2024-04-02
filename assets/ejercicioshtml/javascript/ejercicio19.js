const pi = Math.PI;

let radio = parseFloat(prompt("Ingrese el radio del cilindro:"));
let altura = parseFloat(prompt("Ingrese la altura del cilindro:"));

let areaSuperficieLateral = 2 * pi * radio * altura;

let volumen = pi * radio ** 2 * altura;

alert("El área de la superficie lateral del cilindro es: " + areaSuperficieLateral.toFixed(2));
alert("El volumen del cilindro es: " + volumen.toFixed(2));
