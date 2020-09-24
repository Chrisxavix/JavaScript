/* --------------------- CURSO JAVASCRIPT ------------------- */
/* 
1) Symbol: Línea 
2) Set: Linea 
3) Objeto Date: Línea 
4) Operador Cortocircuito: Línea 
5) Expresiones regulares: Línea
*/

/* 1) ------------------ Symbol -------------------- */
/* Symbol es un tipo de dato primitivo como (number, 
string,etc).
Permiten crear identificadores de referencia únicos */

/* Ejemplo de ids que son iguales */
/* let id = 'hola';
let id2 = 'hola';
console.log(id===id2) */
/* Imprime:
true */

/* Ejemplo de ids que son diferentes con symbol*/
/* let id = Symbol('hola');
let id2 = Symbol('hola');
console.log(id===id2)
console.log(id) */
/* Imprime1:
false
Imprime2:
Symbol(hola) */
/* 1) ------------------ Symbol -------------------- */

/* 2) ------------------- Set --------------------- */
/* Set es un arreglo que acepta valores primitivos para
eliminar elementos duplicados */

/* let set = new Set([1,2,3,3,false,'hola', 'HOLA', true, false]);
console.log(set); */
/* Imprime: elimina repetidos
0: 1
1: 2
2: 3
3: false
4: "hola"
5: "HOLA"
6: true */

/* 2) ------------------- Set --------------------- */


