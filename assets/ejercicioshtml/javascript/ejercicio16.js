let distancia_km = 2;
let tiempo_min = 5;

let distancia_m = distancia_km * 1000;

let tiempo_s = tiempo_min * 60;

let velocidad_m_s = distancia_m / tiempo_s;

alert("La velocidad del proyectil es: " + velocidad_m_s.toFixed(2) + " metros/segundo.");
