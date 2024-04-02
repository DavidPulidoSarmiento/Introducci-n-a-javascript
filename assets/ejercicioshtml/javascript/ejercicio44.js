const tasaCambioDolar = 0.00025; 
const tasaCambioEuro = 0.00021; 

function convertirPesosADolares(pesos) {
    return pesos * tasaCambioDolar;
}

function convertirPesosAEuros(pesos) {
    return pesos * tasaCambioEuro;
}

var pesos = parseFloat(prompt("Ingrese la cantidad de pesos colombianos a convertir:"));

var dolares = convertirPesosADolares(pesos);
var euros = convertirPesosAEuros(pesos);

console.log("La cantidad de " + pesos + " pesos colombianos equivale a:");
console.log(dolares + " dólares (USD)");
console.log(euros + " euros (EUR)");
