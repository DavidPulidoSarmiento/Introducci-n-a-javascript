function comprobarFortaleza(contrasena) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,12}$/;
    return regex.test(contrasena);
}

let contrasena = prompt("Ingrese su contraseña:");

let esFuerte = comprobarFortaleza(contrasena);

if (esFuerte) {
    alert("La contraseña es fuerte.");
} else {
    alert("La contraseña no cumple con los requisitos de fortaleza.");
}
