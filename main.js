/* --------------------- CURSO JAVASCRIPT ------------------- */

/* ------------------Tipos de impresiones------------------- */
/* console: imprime en la consola (F12)
alert: notificación en el navegador
prompt: ventana de ingreso de valores 
document.write: imprime en la página*/
/* console.log('hola');
alert('hola');
prompt('Escriba su nombre'); 
document.write("Hola");*/
/* ------------------Tipos de impresiones------------------- */

/* --------------------- Strings ------------------------- */
/* let nombre = "Chris" */
/* 1) Al poner '+' para concatenar se elimina el espaciado, ejemplo de impresión: 
Hola Chris, su nombre tiene: 5 letras. */
/* 2) Propiedad length cuenta los caracteres de la cadena */
/* console.log('Hola ' + nombre + ', su nombre tiene: ' + nombre.length + ' letras.'); */

/* Al poner ',' para concatenar agrega el espaciado, ejemplo de impresión: 
Hola  Chris , su nombre tiene:  5  letras. */
/* console.log('Hola ', nombre, ', su nombre tiene: ' ,nombre.length, ' letras.'); */

/* Ingreso manualmente */
/* let res = prompt("Escriba su nombre");
alert('Hola '+ res + '. Tiene '+ res.length + ' letras su nombre.'); */

/* Ingresa mayúsuculas y todo lo pone en minúsculas*/ 
/* let res = prompt("Escriba su nombre");
alert('Hola '+ res.toLowerCase()); */
/* Ingresa: DANI
Imprime: dani */

/* Ingresa minúsculas y todo lo pone en mayúsuculas*/ 
/* let res = prompt("Escriba su nombre");
alert('Hola '+ res.toUpperCase()); */
/* Ingresa: dani
Imprime: DANI */

/* El includes verifica que exista el valor */
/* let res = 'lorem tres cuatro cinco'
alert('Hola '+ res.includes('cinco')); */
/* Imprime: Hola true */

/* trim, elimina los espacios de inicio y fin */
/* let res = ' lorem tres cuatro cinco '
console.log(res);
console.log(res.trim()); */
/* Imprime1:  lorem tres cuatro cinco
Imprime2:lorem tres cuatro cinco */

/* split. separa las cadenas a partir un espacio en un array */
/* let res = 'lorem tres cuatro cinco'
console.log(res.split(' ')); */
/* Imprime: ["lorem", "tres", "cuatro", "cinco"] /*

/* Impime la primera cadena despues del "." */
/* var str = "Dani Fhn. Filth"; 
var splitted = str.split('.')[1];
console.log(splitted); */
/* Imprime: Filth */

/* Separa la cadena después de un punto e imprime separadas en un array*/
/* var str = "Dani.Chris"; 
var splitted = str.split('.');
console.log(splitted); */
/* Imprime: ["Dani", "Chris"] */

/* Imprime la primera letra de la cadena y lo convierte a mayúscula */
/* let str = "dani Fhn Filth asd, asddsf"; 
let splitted = str.substring(0, 1).toUpperCase()
console.log(splitted); */
/* Imprime: D */

/* Imprime la cuatro letras de la cadena y lo convierte a mayúscula */
/* let str = "dani Fhn Filth asd, asddsf"; 
let splitted = str.substring(0, 4).toUpperCase()
console.log(splitted);  */
/* Imprime: DANI */

/* Elimina la primera letra de la cadena */
/* let str = "Dani Fhn Filth asd, asddsf"; 
let splitted = str.substring(1);
console.log(splitted) ; */
/* Imprime: ani Fhn Filth asd, asddsf */

/* Imprime la cadena desde el 0 al 8 */
/* let str = "Dani Fhn Filth asd, asddsf"; 
let splitted = str.substring(0,8);
console.log(splitted); */
/* Imprime: Dani Fhn */

/* Interpolación o concatecación */
/* let nombre='Chris';
let edad=25;
console.log(`Hola ${nombre}, tienes ${edad} años.`); */

/* Manda notificación de ingreso del nombre, (maggot) está ingresado por defecto */
/* const nombre = prompt("Escribe tu nombre", "maggot");
document.write("Hola " + nombre); */
/* Imprime: Hola maggot */
/* --------------------- Strings ------------------------- */

/* --------------------------- Números -------------------------- */
/* Suma de dos valores con interpolación */
/* const a=5;
const b=10;
result=a+b;
console.log(`El resultado es ${result}, de la suma de ${a} + ${b}`); */
/* Imprime: El resultado es 15, de la suma de 5 + 10 */

/* Redondear decimales, el (1) define cuántos decimales */
/* c=7.19;
console.log(c.toFixed(1)); */
/* Imprime: 7.2 */

/* Me da el número entero */
/* c=7.19;
console.log(parseInt(c)); */
/* Imprime: 7 */

/* Suma de números, no toma la parte decimal */
/* c=7.19;
d='5.6'
console.log(c + parseInt(d)); */
/* Imprime: 12.190000000000001 */

/* Suma de números con la parte decimal */
/* c=7.19;
d='5.6'
console.log(c + parseFloat(d)); */
/* Imprime: 12.79 */

/* Suma de dos números con ingreso de datos con parseInt() */
/* const num1 = prompt("Escriba el primer número");
const num2 = prompt("Escriba el segundo número");
result = parseInt(num1)  + parseInt(num2);
document.write("Resultado: ", result); */
/* Imprime: Resultado 10 */
/* --------------------------- Números -------------------------- */















