/* --------------------- CURSO JAVASCRIPT ------------------- */
/* 
1) Prototipos: Línea 9
2) Objeto Math: Linea 28
3) Objeto Date: Línea 56
4) Operador Cortocircuito: Línea 100
*/

/* 1) ---------------- Objeto console ------------------ */

/* console.error('Esto es un error'); */
/* Imprime: (color rojo)
Esto es un error */

/* console.warn('Esto es un aviso'); */
/* Imprime: (color amarillo)
Esto es un aviso */

/* console.log('Esto es un registro de lo que pasa'); */
/* Imprime: (color amarillo)
Esto es un registro de lo que pasa */

/* console.clear(); */
/* Imprime:
Console was cleared */
/* ------------------ Objeto console -------------------- */

/* 2) ---------------- Objeto Date --------------------- */

/* console.log(Date()); */
/* Imprime:
Tue Sep 15 2020 21:38:57 
GMT-0500 (hora de Ecuador) */

/* let fecha = new Date();
console.log(fecha);
console.log(fecha.getDate());
console.log(fecha.getDay());
console.log(fecha.getMonth());
console.log(fecha.getFullYear()); */
/* Imprime1:
Tue Sep 15 2020 21:42:21 
GMT-0500 (hora de Ecuador)
Imprime2: Es el día del mes
15 
Imprime3: Dias de la semana
de Domingo a Sábado:
D L M MI J V S: 0, 1, 2, 3, 4, 5, 6
2 
Imprime4: mismo que los días de la semana
8 
Imprime: 5
2020 */
/* -------------------- Objeto Date --------------------- */

/* 3) ------------------ Objeto Math -------------------- */

/* El menor valor */
/* console.log(Math.min(1,5,7)); */
/* Imprime:
1 */

/* El máximo valor */
/* console.log(Math.max(1,5,7)); */
/* Imprime:
7 */

/* El valor redondeado */
/* console.log(Math.round(7.5)); */
/* Imprime:
8 */

/* Raíz cuadrada */
/* console.log(Math.sqrt(81)); */
/* Imprime: 
81 */

/* Potencia */
/* console.log(Math.pow(2,3)); */
/* Imprime: 
8 */

/* El ramdom, entre 0 a 1 */
/* console.log(Math.random()); */
/* Imprime: 
0.4593201250271899 */

/* El ramdom, del 0 al 10 */
/* console.log(Math.random() * 10); */
/* Imprime: 
2.5817324454330404 */

/* El ramdom, dentro de un round se quita la parte decimal,
además, es del 0 al 10 */
/* console.log(Math.round(Math.random() * 10)); */
/* Imprime: 
87 */
/* --------------------- Objeto Math -------------------- */

/* 4) ------------- Operador Cortocircuito -------------- */

/* Cortocircuito con OR(||) y AND(&&) */

/* En caso de que el llamado de la función no esté
con parámetros (un nombre), mandar (desco).
Cortocircuito en (name = name || "desco";) */
/* function saludar(name) {
    name = name || "desco";
    console.log('Hola ', name);
}
saludar('Dani');
saludar(); */
/* Imprime1:
Dani
Imprime2:
desco */

/* En caso de que el llamado de la función no esté
con parámetros (un nombre), mandar (desco) */
/* function saludar(name = 'descoss') {
    console.log('Hola ', name);
}
saludar('Dani');
saludar(); */
/* Imprime1:
Dani
Imprime2:
descoss */

/* console.log(true || 'Derecha');
console.log({} || 'Derecha');
console.log(false || 'Derecha'); */
/* Imprime1:
true
Imprime2:
{}
Imprime:
Derecha */

/* console.log(false && 'Izquierda');
console.log(true && 'Izquierda'); */
/* Imprime1:
false
Imprime2:
Izquierda */
/* ----------------- Operador Cortocircuito -------------- */
