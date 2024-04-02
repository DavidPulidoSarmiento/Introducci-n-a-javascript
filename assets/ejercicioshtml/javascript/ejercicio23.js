let velocidadKmh = parseFloat(prompt("Ingrese la velocidad del automóvil en kilómetros por hora:"));

let velocidadMs = velocidadKmh * (5 / 18);

alert("La velocidad del automóvil es: " + velocidadMs.toFixed(2) + " metros por segundo.");
