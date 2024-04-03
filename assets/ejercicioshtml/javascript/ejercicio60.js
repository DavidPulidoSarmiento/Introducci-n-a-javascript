var cantidadCursos = parseInt(prompt("Ingrese la cantidad de cursos que lleva el alumno:"));

var montoPago;

if (cantidadCursos < 6) {
    montoPago = cantidadCursos * 2000000; 
} else {
    montoPago = cantidadCursos * 1200000; 
}

console.log("El monto a pagar por los cursos es: $" + montoPago);
