function calcularSubtotal(precios) {
    var subtotal = 0;
    for (var i = 0; i < precios.length; i++) {
        subtotal += precios[i];
    }
    return subtotal;
}

function calcularIVA(subtotal) {
    return subtotal * 0.19; 
}

function calcularTotal(subtotal, iva) {
    return subtotal + iva;
}

var preciosProductos = [];

for (var i = 1; i <= 5; i++) {
    var precio = parseFloat(prompt("Ingrese el precio del producto " + i + ":"));
    preciosProductos.push(precio);
}

var subtotal = calcularSubtotal(preciosProductos);

var iva = calcularIVA(subtotal);

var total = calcularTotal(subtotal, iva);

console.log("Subtotal: $" + subtotal.toFixed(2));
console.log("IVA: $" + iva.toFixed(2));
console.log("Total: $" + total.toFixed(2));
