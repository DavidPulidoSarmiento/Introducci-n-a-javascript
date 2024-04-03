function calcularDescuento(membresia, totalCompra) {
    var descuento = 0;
    switch (membresia.toUpperCase()) {
        case "A":
            descuento = totalCompra * 0.10; 
            break;
        case "B":
            descuento = totalCompra * 0.15; 
            break;
        case "C":
            descuento = totalCompra * 0.20; 
            break;
        default:
            console.log("Tipo de membresía no válido.");
    }
    return descuento;
}

var tipoMembresia = prompt("Ingrese el tipo de membresía (A, B o C):").toUpperCase();
var totalCompra = parseFloat(prompt("Ingrese el total de la compra:"));

var descuento = calcularDescuento(tipoMembresia, totalCompra);

if (descuento > 0) {
    console.log("El descuento para el cliente con membresía tipo " + tipoMembresia + " es: $" + descuento.toFixed(2));
} else {
    console.log("No se aplicó ningún descuento para el cliente con membresía tipo " + tipoMembresia + ".");
}
