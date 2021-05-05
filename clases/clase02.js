/* --------------------- CURSO JAVASCRIPT ------------------- */
/* 
4) Palabras Reservadas (Break - Continue): Línea 239
5) Destructuración: Línea 290
6) Parámetros Rest & Operador Spread (propagar: Línea 359
7) Arrow Functions: 402
*/

/* 4) ---- Palabras Reservadas (Break - Continue) ----- */

/* El break detiene el bucle cuando la condición se cumple */
/* const numeros = [1, 2, 3, 4, 5, 6, 7];
for (i=0; i<numeros.length; i++) {
    if(i===3) {
        break;
    }
    console.log(numeros[i]);
} */
/* Imprime: 
1
2
3 */

/* El continue elimina la posición y continua con el bucle
normalmente */
/* const numeros = [1, 2, 3, 4, 5, 6, 7];
for (i=0; i<numeros.length; i++) {
    if(i===3) {
        continue;
    }
    console.log(numeros[i]);
} */
/* Imprime:
1
2
3
5
6
7 */

/* Ejercicio de valores que sean divisibles para 2 con el
módulo, ejemplo: 34%2=0, por lo que se imprime, cosa
distinta sucede con: 63%2=1, por lo que elimina y continua */
/* let nums = [1, 2, 63, 34, 56, 345, 76, 2, 67, 22];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) {
        continue;
    }
    console.log(nums[i]);
} */
/* Imprime: 
2
34
56
76
2
22 */
/* ------ Palabras Reservadas (Break - Continue) -------- */

/* 5) -------------- Destructuración -------------------- */

/* Tomar el valor de cada posición del array
sin destructuración */
/* const numeros = [78, 27, 3];
const a = numeros[0];
const b = numeros[1];
const c = numeros[2];
console.log(a);
console.log(b);
console.log(c); */
/* Imprime:
78
27
3 */

/* Con destructuración es ahorrar líneas de código
y darles valor a la posición del arreglo */
/* const numeros = [78, 27, 3];
const[a, b, c] = numeros;
console.log(a);
console.log(b);
console.log(c); */
/* Imprime:
78
27
3 */

/* Tomar el valor de cada posición del objeto
sin destructuración */
/* const chris = {id: 1, name: 'Chris', apellido: 'Chillogalli'};
const a1 = chris.id;
const a2 = chris.name;
const a3 = chris.apellido;
console.log(a1);
console.log(a2);
console.log(a3); */
/* Imprime:
1
Chris
Chillogalli */

/* Con destructuración es ahorrar líneas de código
y darles valor a la posición del objeto, no importa el orden
en el que se declare */
/* const chris = {id: 1, name: 'Chris', apellido: 'Chillogalli'};
let {name, apellido, id} = chris;
console.log(id);
console.log(name);
console.log(apellido); */
/* Imprime:
1
Chris
Chillogalli */

/* Cambiar el valor de un objeto */
/* const chris = {id: 1, name: 'Chris', apellido: 'Chillogalli'};
chris.id = '2'
chris.name = 'Dani'
chris.apellido = 'Filth'
console.log(chris.id);
console.log(chris.name);
console.log(chris.apellido); */
/* Imprime:
2
Dani
Filth */
/* ----------------- Destructuración -------------------- */

/* 6) --- Parámetros Rest & Operador Spread (propagar) --- */

/* Parámetro Rest, los puntos (...), permite agregar
valores no definidos, son parámetros que recibe una
función */
/* function sum(a,b, ...valorNuevo) {
    let result = a+b;
    valorNuevo.forEach(function (n) {
        result += n;
    })
    return result;
}
let b = sum(8,4,9,10);
console.log('La respuesta es:', b) */
/* Imprime: 
La respuesta es: 31 */

/* Operador Spread, al agregar los puntos (...), une 
los dos arreglos y les da posición a cada valor */
/* const Arreglo1 = [1,2,3,4,5];
const Arreglo2 = [11,12,13,14,15];
const Arreglo3 = [...Arreglo1, ...Arreglo2]
console.log(Arreglo1);
console.log(Arreglo2);
console.log(Arreglo3); */
/* Imprime: 
(5) [1, 2, 3, 4, 5]
(5) [11, 12, 13, 14, 15]
(10) [1, 2, 3, 4, 5, 11, 12, 13, 14, 15] */

/* El mismo ejemplo, pero con objetos */
/* const Objeto1 = {id: 1, name: 'Chris'};
const Objeto2 = {lastname: 'Chillogalli'};
const Objeto3 = {...Objeto1, ...Objeto2};
console.log(Objeto1);
console.log(Objeto2);
console.log(Objeto3); */
/* Imprime:
{id: 1, name: "Chris"}
{lastname: "Chillogalli"}
{id: 1, name: "Chris", lastname: "Chillogalli"} */
/* ---- Parámetros Rest & Operador Spread (propagar) ---- */

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
