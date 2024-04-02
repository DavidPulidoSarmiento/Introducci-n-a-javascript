let width = parseFloat(prompt("Ingresa la base del rectángulo:"));
let height = parseFloat(prompt("Ingresa la altura del rectángulo:"));

if (width > 0 && height > 0) {
  let rectangleArea = width * height;
  alert("El área del rectángulo es: " + rectangleArea);
} else {
  alert("La base y/o altura deben ser positivas.");
}