function calcularInteres(saldo) {
    var interesAnual;

    if (saldo < 100000) {
        interesAnual = 0.03; 
    } else {
        interesAnual = 0.04; 
    }

    var interesPagado = saldo * interesAnual;
    return interesPagado;
}

var saldo = parseFloat(prompt("Ingrese el saldo del depósito:"));

var interesPagado = calcularInteres(saldo);

var saldoFinal = saldo + interesPagado;

console.log("Saldo final: $" + saldoFinal.toFixed(2));
console.log("Interés pagado: $" + interesPagado.toFixed(2));
