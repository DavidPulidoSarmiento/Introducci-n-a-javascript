function esNumeroPositivo(numero) {
    return !isNaN(numero) && numero > 0;
  } 
  
function verificarEdad() {
    let edad = prompt("Ingrese su edad:");

    while (!esNumeroPositivo(edad)) {
      edad = prompt("Por favor, ingrese un número positivo para la edad:");
    }
    
    // Convertir la entrada a número
    edad = parseInt(edad);
    
    // Verificar si es mayor o menor de edad
    if (edad >= 18) {
      alert("Eres mayor de edad.");
    } else {
      alert("Eres menor de edad.");
    }
  }
  
  // Llamar a la función principal
  verificarEdad();
  