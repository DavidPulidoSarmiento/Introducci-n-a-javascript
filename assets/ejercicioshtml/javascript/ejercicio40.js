var añoActual = new Date().getFullYear();

var añoNacimiento = parseInt(prompt("Ingrese el año de nacimiento:"));

var edad = añoActual - añoNacimiento;

console.log("La edad de la persona es: " + edad + " años.");
