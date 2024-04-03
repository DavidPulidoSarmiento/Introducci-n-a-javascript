var cantidadInvertir = parseFloat(prompt("Ingrese la cantidad a invertir:"));
var interesAnual = parseFloat(prompt("Ingrese el interés anual (en porcentaje):"));
var numeroAnios = parseInt(prompt("Ingrese el número de años:"));

for (var i = 1; i <= numeroAnios; i++) {
    var capital = cantidadInvertir * Math.pow((1 + (interesAnual / 100)), i);
    console.log("Año " + i + ": $" + capital.toFixed(2));
}
