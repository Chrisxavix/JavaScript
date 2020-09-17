/* --------------------- CURSO JAVASCRIPT ------------------- */
/* 
1) Módulos (import - export) : Línea 
*/

/* 1) --------- Módulos (import - export) --------------- */

/* Exporta por cada variable del archivo (constantes), siempre
y cuando tengan delante la palabra export 
Por lo que se declara (PI, usuario) */
/* Code: 001 */
/* import { PI, usuario } from "./constantes.js";
console.log(PI);
console.log(usuario); */
/* Imprime:
3.141592653589793
14 Chris */

/* Code: 002 */
/* import { sumar, restar } from "./aritmetica.js";
console.log(sumar(3,4)); */
/* Imprime: 
7 */

/* Code: 003 */
/* Llamar como fue creado el objeto */
/* import { aritmetica } from "./aritmetica.js";
console.log(aritmetica.sumar(3,8)); */
/* Imprime: 
11 */

/* Code: 004 */
/* Llamado de la clase saludar con import */
/* import  {Saludar, PI, usuario } from "./constantes.js";
let saludo = new Saludar();
saludo; */
/* Imprime:
Hoooola */

/* Code: 004 - copia para darle alias */
/* Darle un alias (Saludar ahora se llama sal) */
/* import  {Saludar as sal, PI, usuario } from "./constantes.js";
let saludo = new sal();
saludo; */
/* Imprime:
Hoooola */

/* Code: 003 - copia para darle alias */
/* Llamar como fue creado el objeto */
/* import { aritmetica as cal } from "./aritmetica.js";
console.log(cal.sumar(3,8)); */
/* Imprime: 
11 */
/* 1) --------- Módulos (import - export) --------------- */
