const costoPorMinuto = 355;
const iva = 0.20;

let duracionLlamadaMinutos = parseFloat(prompt("Ingrese la duración de la llamada en minutos:"));

let costoSinIVA = costoPorMinuto * duracionLlamadaMinutos;

let montoIVA = costoSinIVA * iva;

let costoTotal = costoSinIVA + montoIVA;

alert("El costo total de la llamada es: $" + costoTotal.toFixed(2));
