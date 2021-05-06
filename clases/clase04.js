/* --------------------- CURSO JAVASCRIPT ------------------- */
/* 
4) Operador Cortocircuito: Línea 101
5) Expresiones regulares: Línea 149
*/

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
