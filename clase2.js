/* --------------------- CURSO JAVASCRIPT ------------------- */
/* 
1) Estructura If - Switch: Línea 12
2) Estructura while, for: Linea 64
3) Control de errores: Línea 182
4) Palabras Reservadas (Break - Continue): Línea 239
5) Destructuración: Línea 290
6) Parámetros Rest & Operador Spread (propagar: Línea 359
7) Arrow Functions: 402
*/

/* 1) ------------- Estructura If - Switch ------------- */

/* Bucle if, condición de sí y no */

/* let edad = 19;
if (edad>19) {
    console.log('Mayor de edad');
} else {
    console.log('Menor de edad');
} */
/* Imprime: 
Mayor de edad */

/* Bucle if con varias condiciones*/
/* let edad = 28;
if (edad<=10) {
    console.log('Niño');
} else if (edad===18) {
    console.log('Adulto');
} else {
    console.log('Tercera edad');
} */
/* Imprime: 
Tercera edad */

/* Operador ternario
Solo una línea de código: verdadero o falso */
/* edad=24;
let mayor = (edad>=18) 
? 'Eres mayor de edad':
'Eres menor de edad';
console.log(mayor); */
/* Imprime: 
Eres mayor de edad */

/* Switch de opciones */
/* let dia=2;
switch (dia) {
case 1:
    console.log('Lunes');
    break;
case 2:
    console.log('Martes');
    break;
default: 
    console.log('No hay día');   
    break;
} */
/* Imprime: 
Martes */
/* --------------- Estructura If - Switch ------------- */

/* 2) ------------ Estructura while, for -------------- */

/* Estructura while, se repite mientras se cumpla la
condición */

/* let cont =0; 
while (cont < 10) {
    cont=cont + 1;
    console.log(cont);
} */
/* Imprime:
1
2
3
4
5
6
7
8
9
10 */

/* Estructura del bucle for
for(inicializar variable; condición, incremento) {
    sentencias de código;
} */

/* Imprimir números con el bucle for */
/* for (let i = 0; i<10; i++){
    console.log('for', i)
} */
/* Imprime:
for 0
for 1
for 2
for 3
for 4
for 5
for 6
for 7
for 8
for 9 */

/* Imprime el array */
/* let numeros = [10, 20, 30, 40, 50, 60, 70];
for (let i = 0; i<numeros.length; i++){
    console.log('for', numeros[i])
} */
/* Imprime:
for 10
for 20
for 30
for 40
for 50
for 60
for 70 */

/* NOTA: 
For In: recorrer propiedades de un objeto
For Of: recorrer elementos de un objeto iterable, que pueda 
darle posición, como un arreglo  */

/* En un objeto con el (for in) entramos al objeto */ 
/* const chris = {nombre: 'chris', apellido: 'Chillo',
edad: 24}
for(const propiedad in chris) {
    console.log(propiedad);
} */
/* Imprime:
nombre
apellido
edad */
 
/* En un objeto con el (for in) recorremos propiedades de un
objeto, buscamos el valor a imprimir */ 
/* const chris = {nombre: 'chris', apellido: 'Chillo',
edad: 24}
for(const propiedad in chris) {
    console.log(`Id: ${propiedad} Validado: ${chris[propiedad]}`);
} */
/* Imprime:
Id: nombre Validado: chris
Id: apellido Validado: Chillo
Id: edad Validado: 24 */
 
/* Permite recorrer todos los elementos de cualquier objeto
que se iterable con el (of) */
/* let numeros = [10, 20, 30, 40, 50, 60, 70];
for (const elemento of numeros) {
    console.log(elemento);
} */
/* Imprime:
10
20
30
40
50
60
70 */

/* Ejemplo 2 con el for of */
/* let caracter = 'Dani Filth';
for (const cart of caracter) {
    console.log(cart);
} */
/* Imprime:
D
a
n
i
  
F
i
l
t
h */
/* -------------- Estructura while, for -------------- */

/* 3) ------------- Control de errores --------------- */

/* El try contiene el código que será evaluado
El catch contiene los errores que daría la consola, 
al imprimir el error muestra como lo haría la consola
del navegador.
El finally siempre se ejecuta, haya o no errores. */

/* try {
    console.log('Se agrega el código a evaluar');
} catch (error) {
    console.log('Captura cualquier error lanzado en el try');
    console.log(error);
} finally {
    console.log('Se ejecuta siempre al final de un bloque try-catch');
} */
/* Imprime:  
Se agrega el código a evaluar
Se ejecuta siempre al final de un bloque try-catch */

/* Agregar un error con (NaNN) ya que no está definida, 
por lo que encuentra el error y no continuá, por eso no 
imprime el "console.log('Segundo mensaje');" */
/* try {
    console.log('Se agrega el código a evaluar');
    NaNN;
    console.log('Segundo mensaje');
} catch (error) {
    console.log('Captura cualquier error lanzado en el try');
    console.log(error);
} finally {
    console.log('Se ejecuta siempre al final de un bloque try-catch');
} */
/* Imprime:  
Se agrega el código a evaluar
Captura cualquier error lanzado en el try
ReferenceError: NaNN is not defined at main.js:439
Se ejecuta siempre al final de un bloque try-catch */

/* Declarar un error con el tipo de dato, usando (isNaN)
para conocer si es un número.
console.trace(), indica la línea de error.*/
/* try {
    let numero = 'lo';
    if (isNaN(numero)) {
        throw new Error('El caracter no es un número.')
    }
    console.log(numero * numero);
} catch (error) {
   console.trace(`Se produjo el error ${error}`);
}  */
/* Imprime: 
Se produjo el error Error: El caracter no es un número.
(anonymous)	@	main.js:463 
O sea, la línea 463 tiene el error. */
/* --------------- Control de errores ----------------- */

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
