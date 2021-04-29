/* --------------------- Strings ------------------------- */

/* 
Al poner ',' se concatena las cadenas con variables
Existe un espaciado extra
*/
console.log('--------- 1 ---------');
const nombre1 = "Chris";
console.log('Hola ',nombre1,'. Su nombre tiene: ',nombre1.length,' letras.');

/* 
Al poner '+' se concatena las cadenas con variables
No existe un espaciado extra
*/
console.log('--------- 2 ---------');
const nombre2 = "Chris";
console.log('Hola '+nombre2+'. Su nombre tiene: '+nombre2.length+' letras.');

/* 
Al poner '`' se concatena las cadenas con variables
Es lo recomendado a usar
*/
console.log('--------- 3 ---------');
const nombre3 = "Chris";
console.log(`Hola ${nombre3}. Su nombre tiene: ${nombre3.length} letras.`);

/* Test  -------------------------------------------------------------------------------------------------*/

/* Convertir un texto a minúscula */
console.log('--------- 4 ---------');
const texto1 = 'MARIA';
console.log(texto1.toLowerCase());

/* Convertir un texto a mayúscula */
console.log('--------- 5 ---------');
const texto2 = 'carlos';
console.log(texto2.toUpperCase());

/* Includes verifica que exista el string en la cadena y responde con true o false */
console.log('--------- 6 ---------');
const texto3 = 'lorem tres cuatro cinco';
console.log(texto3.includes('cinco'));

/* Elimina los espacios de inicio y fin con trim */
console.log('--------- 7 ---------');
const texto4 = '  lorem tres cuatro cinco     ';
console.log(texto4);
console.log(texto4.trim());

/* Separa las cadenas a partir un espacio y lo visualiza en un array con Split */
console.log('--------- 8 ---------');
const texto5 = 'lorem tres cuatro cinco';
console.log(texto5.split(' '));

/* Imprime el primer string despues del "." a partir de la posición */
console.log('--------- 9 ---------');
const texto6 = "Dani Fhn. Filth. Test. Juan"; 
const splitTexto6 = texto6.split('.')[2];
console.log(splitTexto6);

/* Separa la cadena después de un punto e imprime separadas en un array con Split */
console.log('--------- 10 ---------');
const texto7 = "Dani.Chris"; 
const splitTexto7 = texto7.split('.');
console.log(splitTexto7);

/* Imprime la primera letra de la cadena con Substring */
console.log('--------- 11 ---------');
const texto8 = "dani Fhn Filth asd, asddsf"; 
const splitTexto8 = texto8.substring(0, 1);
console.log(splitTexto8);

/* Imprime la primera letra de la cadena y lo convierte a mayúscula */
console.log('--------- 12 ---------');
const texto9 = "dani Fhn Filth asd, asddsf"; 
const splitTexto9 = texto9.substring(0, 1).toUpperCase();
console.log(splitTexto9);

/* Elimina la primera letra de la cadena con Substring */
console.log('--------- 13 ---------');
const texto10 = "Dani Fhn Filth asd, asddsf"; 
const splitTexto10 = texto10.substring(1);
console.log(splitTexto10);
/* --------------------- Strings ------------------------- */
