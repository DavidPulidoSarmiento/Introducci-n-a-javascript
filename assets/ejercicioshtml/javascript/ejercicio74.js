while (true) {
    var mensaje = prompt("Escriba algo ('salir' para terminar):");

    if (mensaje.toLowerCase() === "salir") {
        break; 
    }

    console.log("Usted escribió: " + mensaje);
}

console.log("Programa terminado."); 
