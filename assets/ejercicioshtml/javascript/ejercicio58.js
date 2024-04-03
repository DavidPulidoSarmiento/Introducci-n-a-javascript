var nombreMes = prompt("Ingrese el nombre del mes:").toLowerCase();

if (nombreMes === "enero") {
    console.log("Capricornio (22 de diciembre - 20 de enero)");
} else if (nombreMes === "febrero") {
    console.log("Acuario (21 de enero - 19 de febrero)");
} else if (nombreMes === "marzo") {
    console.log("Piscis (20 de febrero - 20 de marzo)");
} else if (nombreMes === "abril") {
    console.log("Aries (21 de marzo - 20 de abril)");
} else if (nombreMes === "mayo") {
    console.log("Tauro (21 de abril - 21 de mayo)");
} else if (nombreMes === "junio") {
    console.log("Géminis (22 de mayo - 21 de junio)");
} else if (nombreMes === "julio") {
    console.log("Cáncer (22 de junio - 22 de julio)");
} else if (nombreMes === "agosto") {
    console.log("Leo (23 de julio - 22 de agosto)");
} else if (nombreMes === "septiembre") {
    console.log("Virgo (23 de agosto - 22 de septiembre)");
} else if (nombreMes === "octubre") {
    console.log("Libra (23 de septiembre - 22 de octubre)");
} else if (nombreMes === "noviembre") {
    console.log("Escorpio (23 de octubre - 22 de noviembre)");
} else if (nombreMes === "diciembre") {
    console.log("Sagitario (23 de noviembre - 21 de diciembre)");
} else {
    console.log("Nombre del mes no válido.");
}
