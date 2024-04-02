const PI = Math.PI;

let figure = prompt("Ingrese T para Triángulo o C para Círculo:");

if (figure === "T" || figure === "t") {
  let base = parseFloat(prompt("Ingrese la base del triángulo:"));
  let height = parseFloat(prompt("Ingrese la altura del triángulo:"));

  let triangleArea = (base * height) / 2;
  alert("El área del triángulo es: " + triangleArea);
} else if (figure === "C" || figure === "c") {
  let radius = parseFloat(prompt("Ingrese el radio del círculo:"));

  let circleArea = PI * Math.pow(radius, 2);
  alert("El área del círculo es: " + circleArea);
} else {
  alert("Selección inválida.");
}