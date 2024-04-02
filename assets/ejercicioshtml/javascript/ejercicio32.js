function calcularValorConDescuento(precio, descuento) {
    return precio - (precio * (descuento / 100));
}

let precios = [100, 50, 80, 70, 120];

let descuentoPrimerosDos = 5;
let descuentoUltimosDos = 2;

let valoresAPagar = [];
for (let i = 0; i < precios.length; i++) {
    if (i < 2) {
        valoresAPagar.push(calcularValorConDescuento(precios[i], descuentoPrimerosDos));
    } else {
        valoresAPagar.push(calcularValorConDescuento(precios[i], descuentoUltimosDos));
    }
}

let totalCompra = valoresAPagar.reduce((total, valor) => total + valor, 0);

for (let i = 0; i < precios.length; i++) {
    alert("El valor a pagar por el producto " + (i + 1) + " es: $" + valoresAPagar[i].toFixed(2));
}
alert("El total de la compra es: $" + totalCompra.toFixed(2));
