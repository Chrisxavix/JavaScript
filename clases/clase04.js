/* --------------------- CURSO JAVASCRIPT ------------------- */
/* 
2) Objeto Math: Linea 29
4) Operador Cortocircuito: Línea 101
5) Expresiones regulares: Línea 149
*/

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

/* 5) ----------- Expresiones regulares ----------------- */

/* Secuencia de caracteres que forman un patrón de búsqueda,
principalmente en la búsqueda de cadenas de texto 
la (g) es búsqueda global, la (i) ignora mayúscylas*/

/* let cadena = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis velit assumenda dolorem at autem, fugiat quia dicta sint aperiam facere accusantium nam! Enim, eum. Error, molestias soluta. Delectus, asperiores illum."
let expReg = new RegExp("lorem", "g");
let expReg2 = /lorem/ */
/* buscamos la expresión dentro de cadena con (test) */
/* console.log(expReg.test(cadena)); */
/* Imprime:
true */
/* Devuelve un arreglo (exec) */
/* console.log(expReg.exec(cadena)); */
/* Imprime: tener comentado el console de test
["lorem", index: 84, input: "Lorem, ipsum dolor 
sit amet consectetur adipisicin…or, molestias soluta. 
Delectus, asperiores illum.", groups: undefined] */


/* let cadena = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis velit assumenda dolorem at autem, fugiat quia dicta sint aperiam facere accusantium nam! Enim, eum. Error, molestias soluta. Delectus, asperiores illum."
let expReg = new RegExp("lorem", "i");
let expReg2 = /lorem/ */
/* buscamos la expresión dentro de cadena con (test) */
/* console.log(expReg.test(cadena)); */
/* Imprime:
true */
/* Devuelve un arreglo (exec) */
/* console.log(expReg.exec(cadena)); */
/* Imprime: no hace falta tener comentado el console de test
["lorem", index: 84, input: "Lorem, ipsum dolor 
sit amet consectetur adipisicin…or, molestias soluta. 
Delectus, asperiores illum.", groups: undefined] */
/* 5) ----------- Expresiones regulares ----------------- */
