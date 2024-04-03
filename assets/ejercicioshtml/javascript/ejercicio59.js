var edad = parseInt(prompt("Ingrese la edad del estudiante:"));
var estatura = parseInt(prompt("Ingrese la estatura del estudiante en centímetros:"));
var peso = parseInt(prompt("Ingrese el peso del estudiante en kilogramos:"));

if (edad <= 19 && estatura > 175 && peso >= 75 && peso <= 80) {
    console.log("El estudiante es apto para formar parte del equipo de baloncesto del colegio.");
} else {
    console.log("El estudiante no cumple con los requisitos para formar parte del equipo de baloncesto del colegio.");
}
