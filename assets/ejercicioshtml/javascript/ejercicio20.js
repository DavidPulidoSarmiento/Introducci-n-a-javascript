let a = parseFloat(prompt("Ingrese el coeficiente 'a':"));
let b = parseFloat(prompt("Ingrese el coeficiente 'b':"));
let c = parseFloat(prompt("Ingrese el coeficiente 'c':"));

let discriminante = b ** 2 - 4 * a * c;

let raiz1, raiz2;

if (discriminante > 0) {
    raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    alert("Las raíces reales son: " + raiz1.toFixed(2) + " y " + raiz2.toFixed(2));
} else if (discriminante === 0) {
    raiz1 = -b / (2 * a);
    alert("La raíz real doble es: " + raiz1.toFixed(2));
} else {
    alert("La ecuación no tiene raíces reales.");
}
