/* --------------------- CURSO JAVASCRIPT ------------------- */
/* 
7) Arrow Functions: 402
*/

/* 7) -------------- Arrow Functions ------------------- */

/* 1) Cuando es una sola sentencia es opcional las llaves 
2) Es obligado el paréntesis */
/* saludar = () => console.log('Hola');
saludar(); */
/* Imprime: 
Hola  */

/* (nombre) sería el parámetro, es opcional enviarlo
entre paréntesis solo cuando es un parámetro */
/* saludar = nombre => console.log('Hola', nombre);
saludar('Chris'); */
/* Imprime: 
Hola Chris */

/* Ejemplo de uso normal con funciones */
/* sumar = function(a,b) {
    return a+b;
}
result = sumar(4,5);
console.log(result); */
/* Imprime: 
9 */

/* Ejemplo de uso normal con funciones usando las arrow.
Es obligado usar paréntesis para los parámetros cuando 
son más de dos.
La flecha indica el return. */
/* sumar = (a,b) => a+b;
result = sumar(9,5);
console.log(result); */
/* Imprime: 
14 */

/* Usando (.forEach) para iterar el array, se puede evadir 
"function" por "=>"
Ejemplo con "function" */
/* const numeros = [1,5,8,7];
numeros.forEach(function (element) {
    console.log(element)
}) */
/* Imprime: 
1
5
8
7 */

/* Evadiendo "function" por "=>" */
/* const numeros = [1,5,8,7];
numeros.forEach((element) => {
    console.log(element)
}) */
/* Imprime: 
1
5
8
7 */

/* Contexto de objeto con una función normal */
/* const perro = {
    id: 9,
    name: 'Dans',
    ladrar() {
        console.log(this);
    }
}
perro.ladrar(); */
/* Imprime: 
{id: 9, name: "Dans", ladrar: ƒ} */

/* Contexto de Window con una función con arrow */
/* const perro = {
    id: 9,
    name: 'Dans',
    ladrar:() => {
        console.log(this);
    }
}
perro.ladrar(); */
/* Imprime: 
Window {parent: Window, opener: null, 
top: Window, length: 0, frames: Window, …} */
/* ---------------- Arrow Functions -------------------- */
