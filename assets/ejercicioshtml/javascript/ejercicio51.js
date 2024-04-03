function calcularTotalConDescuento(consumo) {
    if (consumo > 130000) {
        return consumo * 0.85; 
    } else {
        return consumo; 
    }
}

var consumo = parseFloat(prompt("Ingrese el monto total del consumo en el restaurante:"));

var totalAPagar = calcularTotalConDescuento(consumo);

console.log("El total a pagar es: $" + totalAPagar.toFixed(2));
