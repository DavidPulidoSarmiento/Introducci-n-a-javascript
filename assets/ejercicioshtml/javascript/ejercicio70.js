var contrasena = "password";

var intento = prompt("Ingrese la contraseña:");

while (intento !== contrasena) {
    intento = prompt("Contraseña incorrecta. Ingrese nuevamente:");
}

console.log("Contraseña correcta. ¡Bienvenido!");
