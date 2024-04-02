let temperature = parseFloat(prompt("Ingresa la temperatura:"));
let pressure = parseFloat(prompt("Ingresa la presión:"));

if (temperature > 100 || pressure > 200) {
  alert("Alarma");
} else {
  alert("Normal");
}