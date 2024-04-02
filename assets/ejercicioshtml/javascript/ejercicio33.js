function calcularEdadMadreEnParto(fechaNacimientoMadre, fechaNacimientoHijo) {
    let edadMadreEnParto = fechaNacimientoHijo.getFullYear() - fechaNacimientoMadre.getFullYear();
    // Ajustar la edad si el cumpleaños de la madre aún no ha pasado este año
    if (fechaNacimientoHijo.getMonth() < fechaNacimientoMadre.getMonth() || 
        (fechaNacimientoHijo.getMonth() === fechaNacimientoMadre.getMonth() && fechaNacimientoHijo.getDate() < fechaNacimientoMadre.getDate())) {
        edadMadreEnParto--;
    }
    return edadMadreEnParto;
}

let fechaNacimientoMadre = new Date('1990-05-15');
let fechaNacimientoHijo = new Date('2015-10-20');

let edadMadreEnParto = calcularEdadMadreEnParto(fechaNacimientoMadre, fechaNacimientoHijo);

alert("La madre tenía " + edadMadreEnParto + " años en el momento del parto.");
