function calcularCostoPintura(area, precioPorMetroCuadrado) {
    return area * precioPorMetroCuadrado;
}

function main() {
    var areaAPintar = parseFloat(prompt("Ingrese el área a pintar en metros cuadrados:"));

    var precioPorMetroCuadrado = parseFloat(prompt("Ingrese el precio por metro cuadrado de pintura:"));

    var costoTotal = calcularCostoPintura(areaAPintar, precioPorMetroCuadrado);

    console.log("El costo total del trabajo de pintura es: $" + costoTotal.toFixed(2));
}

main();
