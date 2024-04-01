    let puntuacion = parseFloat(prompt("Ingrese su puntuación en la evaluación:"));

if (puntuacion === 0.0) {
    alert("Su nivel de rendimiento es: Inaceptable.\nCantidad de dinero recibida: 0€.");
} else if (puntuacion === 0.4) {
    alert("Su nivel de rendimiento es: Aceptable.\nCantidad de dinero recibida: " + (2400 * puntuacion) + "€.");
} else if (puntuacion === 0.6) {
    alert("Su nivel de rendimiento es: Meritorio.\nCantidad de dinero recibida: " + (2400 * puntuacion) + "€.");
} else if (puntuacion > 0.6) {
    alert("Su nivel de rendimiento es: Meritorio.\nCantidad de dinero recibida: " + (2400 * puntuacion) + "€.");
} else {
    alert("La puntuación ingresada no es válida.");
}
