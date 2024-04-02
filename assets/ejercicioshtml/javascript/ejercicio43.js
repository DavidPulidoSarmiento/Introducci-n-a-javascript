var regex = /"([^"\\]|\\.)*"/g;

var texto = 'Este es un "ejemplo de cadena" con "comillas" y caracteres escapados: \\" \\n \\t.';

var coincidencias = texto.match(regex);

console.log("Cadenas entre comillas dobles encontradas:");
coincidencias.forEach(function(cadena, indice) {
    console.log((indice + 1) + ": " + cadena);
});
