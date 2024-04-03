function asignarCalificacion(calificacionNumerica) {
    if (calificacionNumerica >= 9.1 && calificacionNumerica <= 10) {
        return "A (Excelente)";
    } else if (calificacionNumerica >= 8.1 && calificacionNumerica < 9) {
        return "A (Muy bien)";
    } else if (calificacionNumerica >= 7.5 && calificacionNumerica < 8) {
        return "A (Bien)";
    } else {
        return "NA (No Aprobado)";
    }
}

var calificacionNumerica = parseFloat(prompt("Ingrese la calificación numérica:"));

var calificacionLiteral = asignarCalificacion(calificacionNumerica);

console.log("La calificación asignada es: " + calificacionLiteral);
