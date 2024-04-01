function validarContrasena() {

    const contrasenaGuardada = "123";
    let contrasenaIngresada;
  
    do {
      contrasenaIngresada = prompt("Por favor, ingrese la contraseña:");
      if (contrasenaIngresada.toLowerCase() !== contrasenaGuardada.toLowerCase()) {
        alert("La contraseña es incorrecta.");
      } else {
        alert("La contraseña es correcta.");
        return; 
      }
    } while (true); 
}
  
validarContrasena();
  
  