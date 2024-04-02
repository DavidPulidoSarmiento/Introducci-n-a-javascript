let radio = parseFloat(prompt("Ingrese el radio de la circunferencia:"));

let longitud = 2 * Math.PI * radio;

let area = Math.PI * radio ** 2;

alert("Longitud de la circunferencia: " + longitud.toFixed(2));
alert("Área de la circunferencia: " + area.toFixed(2));
