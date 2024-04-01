var tipoPizza = prompt("¿Desea una pizza vegetariana? (Sí o No)").toLowerCase();

var ingredientes = [];

if (tipoPizza === "sí" || tipoPizza === "si") {
    var ingrediente = prompt("Ingredientes disponibles:\na. Pimiento\nb. Tofu\nElija un ingrediente (a o b):").toLowerCase();
    
    if (ingrediente === "a") {
        ingredientes.push("Pimiento");
    } else if (ingrediente === "b") {
        ingredientes.push("Tofu");
    } else {
        alert("Opción no válida.");
    }
} else if (tipoPizza === "no") {
    var ingrediente = prompt("Ingredientes disponibles:\na. Pepperoni\nb. Jamón\nc. Salmón\nElija un ingrediente (a, b o c):").toLowerCase();

    if (ingrediente === "a") {
        ingredientes.push("Pepperoni");
    } else if (ingrediente === "b") {
        ingredientes.push("Jamón");
    } else if (ingrediente === "c") {
        ingredientes.push("Salmón");
    } else {
        alert("Opción no válida.");
    }
} else {
    alert("Opción no válida.");
}

if (ingredientes.length > 0) {
    if (tipoPizza === "sí" || tipoPizza === "si") {
        alert("Ha elegido una pizza vegetariana.\nIngredientes: Mozzarella, Tomate, " + ingredientes.join(", "));
    } else {
        alert("Ha elegido una pizza no vegetariana.\nIngredientes: Mozzarella, Tomate, " + ingredientes.join(", "));
    }
}
