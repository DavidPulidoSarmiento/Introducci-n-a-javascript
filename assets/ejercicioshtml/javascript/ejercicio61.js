var cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas de los alumnos:"));

var notaMasAlta = 0;
var notaMasBaja = 100;
var cantidadMaximas = 0;
var cantidadA = 0;
var cantidadB = 0;
var cantidadC = 0;
var cantidadD = 0;

for (var i = 1; i <= cantidadNotas; i++) {
    var nota = parseInt(prompt("Ingrese la nota del alumno " + i + ":"));

    notaMasAlta = Math.max(notaMasAlta, nota);
    notaMasBaja = Math.min(notaMasBaja, nota);

    if (nota === 100) {
        cantidadMaximas++;
    }

    if (nota >= 90 && nota < 100) {
        cantidadA++;
    } else if (nota >= 80 && nota < 90) {
        cantidadB++;
    } else if (nota >= 70 && nota < 80) {
        cantidadC++;
    } else if (nota >= 60 && nota < 70) {
        cantidadD++;
    }
}

console.log("Nota más alta: " + notaMasAlta);
console.log("Nota más baja: " + notaMasBaja);
console.log("Cantidad de alumnos que obtuvieron la máxima nota de 100: " + cantidadMaximas);
console.log("Cantidad de alumnos con calificación 'a' (90-99): " + cantidadA);
console.log("Cantidad de alumnos con calificación 'b' (80-89): " + cantidadB);
console.log("Cantidad de alumnos con calificación 'c' (70-79): " + cantidadC);
console.log("Cantidad de alumnos con calificación 'd' (60-69): " + cantidadD);
