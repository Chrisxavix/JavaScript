/* --------- Módulos (import - export) --------------- */

/* Importar constantes */
console.log('--------- 1 ---------');
import { PI, usuario } from "./constantes.js";
console.log(PI);
console.log(usuario);

/* Importar funciones */
console.log('--------- 2 ---------');
import { sumar, restar } from "./aritmetica.js";
console.log('La suma es:', sumar(3, 4));
console.log('La resta es:', restar(10, 5));

/* Llamar como fue creado el objeto */
console.log('--------- 3 ---------');
import { operaciones } from "./aritmeticaV2.js";
console.log('La suma es:', operaciones.sumar(4, 8));

/* Llamado de la clase saludar */
console.log('--------- 4 ---------');
import { Saludar } from "./hi.js";
let saludo = new Saludar();
saludo;

/* Darle un alias (Saludar ahora se llama sal) */
console.log('--------- 5 ---------');
import  {Saludar as sal } from "./hi.js";
let saludoV2 = new sal();
saludoV2;
