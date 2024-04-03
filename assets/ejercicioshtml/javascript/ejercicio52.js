function calcularPago(tipoEmpleado, horasTrabajadas) {
    var tarifaHora;

    if (tipoEmpleado === "planta") {
        tarifaHora = 20000;
    } else if (tipoEmpleado === "administrativo") {
        tarifaHora = 10000;
    } else {
        console.log("Tipo de empleado no válido.");
        return null;
    }

    var pagoTotal = tarifaHora * horasTrabajadas;
    return pagoTotal;
}

var tipoEmpleado = prompt("Ingrese el tipo de empleado (planta o administrativo):").toLowerCase();
var horasTrabajadas = parseFloat(prompt("Ingrese el total de horas trabajadas:"));

var pago = calcularPago(tipoEmpleado, horasTrabajadas);

if (pago !== null) {
    console.log("El pago para el empleado es: $" + pago.toFixed(2));
}
