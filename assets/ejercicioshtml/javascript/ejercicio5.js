let edad = parseInt(prompt("Ingrese su edad:"));

if (edad > 16) {
    let ingresosMensuales = parseFloat(prompt("Ingrese sus ingresos mensuales:"));

    if (ingresosMensuales >= 1000) {
        alert("Usted debe tributar.");
    } else {
        alert("Usted no debe tributar, sus ingresos mensuales son inferiores a 1000.");
    }
} else {
    alert("Usted no debe tributar, debe ser mayor de 16 años para tributar.");
}
