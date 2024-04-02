let costoMedicamentos = parseFloat(prompt("Ingrese el costo de los medicamentos:"));

let descuento = costoMedicamentos * 0.10;

let precioFinal = costoMedicamentos - descuento;

alert("El descuento aplicado es: $" + descuento.toFixed(2));
alert("El precio final de los medicamentos es: $" + precioFinal.toFixed(2));
