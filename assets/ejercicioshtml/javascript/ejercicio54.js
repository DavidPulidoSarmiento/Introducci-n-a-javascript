var num1 = parseFloat(prompt("Ingrese el primer número:"));
var num2 = parseFloat(prompt("Ingrese el segundo número:"));

if (num1 > num2) {
    var resultado = num1 - num2;
    console.log("El resultado de la resta es: " + resultado);
} else {
    console.log("La operación no es posible realizarla, ya que el primer número no es mayor que el segundo.");
}
