let rentaAnual = parseFloat(prompt("Ingrese su renta anual:"));

if (rentaAnual <= 10000) {
    alert("Su tipo impositivo es del 0%.");
} else if (rentaAnual > 10000 && rentaAnual <= 20000) {
    alert("Su tipo impositivo es del 5%.");
} else if (rentaAnual > 20000 && rentaAnual <= 35000) {
    alert("Su tipo impositivo es del 10%.");
} else if (rentaAnual > 35000 && rentaAnual <= 60000) {
    alert("Su tipo impositivo es del 20%.");
} else {
    alert("Su tipo impositivo es del 45%.");
}
