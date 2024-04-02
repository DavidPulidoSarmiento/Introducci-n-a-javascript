var precioLibro = 10000;
var precioCuaderno = 7550;
var precioLapicero = 5550;

var cantidadLibros = parseInt(prompt("Ingrese la cantidad de libros vendidos:"));
var cantidadCuadernos = parseInt(prompt("Ingrese la cantidad de cuadernos vendidos:"));
var cantidadLapiceros = parseInt(prompt("Ingrese la cantidad de lapiceros vendidos:"));

var montoTotalVenta = (cantidadLibros * precioLibro) + (cantidadCuadernos * precioCuaderno) + (cantidadLapiceros * precioLapicero);

console.log("El monto total de la venta es: $" + montoTotalVenta.toFixed(2));
