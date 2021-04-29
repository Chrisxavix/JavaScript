/* --------------------- Strings ------------------------- */

/* 
Al poner ',' se concatena las cadenas con variables
Existe un espaciado extra
*/
/* let nombre = "Chris"
console.log('Hola ',nombre,'. Su nombre tiene: ',nombre.length,' letras.'); */

/* 
Al poner '+' se concatena las cadenas con variables
No existe un espaciado extra
*/
/* let nombre = "Chris"
console.log('Hola '+nombre+'. Su nombre tiene: '+nombre.length+' letras.'); */

/* 
Al poner '`' se concatena las cadenas con variables
Es lo recomendado a usar
*/
/* let nombre = "Chris"
console.log(`Hola ${nombre}. Su nombre tiene: ${nombre.length} letras.`); */











/* Ingresa mayúsculas y todo lo pone en minúsculas 
con el método toLowerCase */ 
/* let name = prompt("Escriba su nombre");
alert('Hola '+ name.toLowerCase()); */
/* Ingresa: DANI
Imprime: dani */

/* Ingresa minúsculas y todo lo pone en mayúsculas con
el método toUpperCase */ 
/* let name = prompt("Escriba su nombre");
alert('Hola '+ name.toUpperCase()); */
/* Ingresa: dani
Imprime: DANI */

/* El includes verifica que exista el valor */
/* let res = 'lorem tres cuatro cinco'
alert(res.includes('cinco')); */
/* Imprime:
true */

/* trim, elimina los espacios de inicio y fin */
/* let res = ' lorem tres cuatro cinco '
console.log(res);
console.log(res.trim()); */
/* Imprime1:  
    lorem tres cuatro cinco
Imprime2:
lorem tres cuatro cinco */

/* split. separa las cadenas a partir un espacio y
lo visualiza en un array */
/* let res = 'lorem tres cuatro cinco'
console.log(res.split(' ')); */
/* Imprime: 
["lorem", "tres", "cuatro", "cinco"] /*

/* Impime la primera cadena despues del "." */
/* var str = "Dani Fhn. Filth"; 
var splitted = str.split('.')[1];
console.log(splitted); */
/* Imprime: 
Filth */

/* Separa la cadena después de un punto e imprime separadas 
en un array */
/* var str = "Dani.Chris"; 
var splitted = str.split('.');
console.log(splitted); */
/* Imprime: 
["Dani", "Chris"] */

/* Imprime la primera letra de la cadena y lo convierte a 
mayúscula */
/* let str = "dani Fhn Filth asd, asddsf"; 
let splitted = str.substring(0, 1).toUpperCase()
console.log(splitted); */
/* Imprime: 
D */

/* Imprime las cuatro letras de la cadena y lo convierte a 
mayúscula */
/* let str = "dani Fhn Filth asd, asddsf"; 
let splitted = str.substring(0, 4).toUpperCase()
console.log(splitted);  */
/* Imprime: 
DANI */

/* Elimina la primera letra de la cadena */
/* let str = "Dani Fhn Filth asd, asddsf"; 
let splitted = str.substring(1);
console.log(splitted) ; */
/* Imprime: 
ani Fhn Filth asd, asddsf */

/* Imprime la cadena desde el 0 al 8 */
/* let str = "Dani Fhn Filth asd, asddsf"; 
let splitted = str.substring(0,8);
console.log(splitted); */
/* Imprime: 
Dani Fhn */

/* Interpolación o concatecación */
/* let nombre='Chris';
let edad=25;
console.log(`Hola ${nombre}, tienes ${edad} años.`); */

/* Manda notificación de ingreso del nombre, (maggot) 
está ingresado por defecto */
/* const nombre = prompt("Escribe tu nombre", "maggot");
document.write("Hola " + nombre); */
/* Imprime: 
Hola maggot */
/* --------------------- Strings ------------------------- */