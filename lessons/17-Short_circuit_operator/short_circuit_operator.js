/* 4) ------------- Operador Cortocircuito -------------- */

/* Cortocircuito en (name = name || "Desconocido";) */
/* En caso de que el llamado de la función no esté con parámetros defnidos mandar (Desconocido). */
console.log('--------- 1 ---------');
function saludarV1(name) {
    name = name || "Desconocido";
    console.log('Hola', name);
}
saludarV1('Dani');
saludarV1();

/* Opción 2 de validación usual */
console.log('--------- 2 ---------');
function saludarV2(name = 'Desconocido') {
    console.log('Hola', name);
}
saludarV2('Chris');
saludarV2();
