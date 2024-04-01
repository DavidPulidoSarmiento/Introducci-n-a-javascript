let nombre = prompt("Ingrese su nombre:");
let sexo = prompt("Ingrese su sexo (H para hombre, M para mujer):").toUpperCase();

if ((sexo === 'M' && nombre.toUpperCase() < 'M') || (sexo === 'H' && nombre.toUpperCase() > 'N')) {
    alert("Usted pertenece al grupo A.");
} else {
    alert("Usted pertenece al grupo B.");
}
