function calcularTiempoEstimado(caudal, radio, altura) {
    let volumen = Math.PI * Math.pow(radio, 2) * altura;
    let tiempoEstimado = volumen / caudal / 60;
    return tiempoEstimado;
}

let caudal = 10; // litros por segundo
let radio = 1; // metro
let altura = 2; // metros

let tiempoEstimado = calcularTiempoEstimado(caudal, radio, altura);

alert("El tiempo estimado para el llenado del depósito es: " + tiempoEstimado.toFixed(2) + " minutos.");
