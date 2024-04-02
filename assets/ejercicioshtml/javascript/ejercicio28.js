let nombreEmpleado = prompt("Ingrese el nombre del empleado:");
let horasTrabajadas = parseFloat(prompt("Ingrese las horas trabajadas por el empleado:"));
let pagoPorHora = parseFloat(prompt("Ingrese el pago por hora del empleado:"));

let sueldo = horasTrabajadas * pagoPorHora;

alert("El sueldo de " + nombreEmpleado + " es: $" + sueldo.toFixed(2));
