let examen1 = parseFloat(prompt("Ingrese la calificación del primer examen (1 a 5):"));
let examen2 = parseFloat(prompt("Ingrese la calificación del segundo examen (1 a 5):"));
let examen3 = parseFloat(prompt("Ingrese la calificación del tercer examen (1 a 5):"));
let examen4 = parseFloat(prompt("Ingrese la calificación del cuarto examen (1 a 5):"));

let promedio = (examen1 + examen2 + examen3 + examen4) / 4;

alert("El promedio de las calificaciones es: " + promedio.toFixed(2));
