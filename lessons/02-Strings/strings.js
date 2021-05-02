/* --------------------- Strings ------------------------- */

/* Concatenar con la coma */
/* Al poner ',' se concatena las cadenas con variables, existe un espaciado extra */
console.log('--------- 1 ---------');
const nombre1 = "Chris";
console.log('Hola ',nombre1,'. Su nombre tiene: ',nombre1.length,' letras.');

/* Concatenar con el signo + */
/* Al poner '+' se concatena las cadenas con variables, no existe un espaciado extra */
console.log('--------- 2 ---------');
const nombre2 = "Chris";
console.log('Hola '+nombre2+'. Su nombre tiene: '+nombre2.length+' letras.');

/* Concatenar con el signo ` */
/* Al poner '`' se concatena las cadenas con variables, es lo recomendado a usar */
console.log('--------- 3 ---------');
const nombre3 = "Chris";
console.log(`Hola ${nombre3}. Su nombre tiene: ${nombre3.length} letras.`);

/* toLowerCase(): convertir un texto a minúscula */
console.log('--------- 4 ---------');
const texto1 = 'MARIA';
console.log(texto1.toLowerCase());

/* toUpperCase(): convertir un texto a mayúscula */
console.log('--------- 5 ---------');
const texto2 = 'carlos';
console.log(texto2.toUpperCase());

/* includes(): verifica que exista el string en la cadena */
/* Responde con true o false */
console.log('--------- 6 ---------');
const texto3 = 'lorem tres cuatro cinco';
console.log(texto3.includes('cinco'));

/* trim(): elimina los espacios de inicio y fin */
console.log('--------- 7 ---------');
const texto4 = '  lorem tres cuatro cinco     ';
console.log(texto4);
console.log(texto4.trim());

/* split(): separa las cadenas a partir un valor */
/* Devuelve un array con caracteres separados a partir del valor */
console.log('--------- 8 ---------');
const texto5 = 'lorem tres cuatro cinco';
console.log(texto5.split(' '));
/* split('.')[1]: imprime el primer string despues del "." a partir de la posición */
console.log('--------- 8.1 ---------');
const texto6 = "Dani Fhn. Filth. Test. Juan"; 
const splitTexto6 = texto6.split('.')[1];
console.log(splitTexto6);

/* substring(1): elimina la primera letra de la cadena */
console.log('--------- 9 ---------');
const texto10 = "Dani Fhn Filth asd, asddsf"; 
const splitTexto10 = texto10.substring(1);
console.log(splitTexto10);
/* substring(0, 1): imprime la primera letra de la cadena con substring */
console.log('--------- 9.1 ---------');
const texto8 = "dani Fhn Filth asd, asddsf"; 
const splitTexto8 = texto8.substring(0, 1);
console.log(splitTexto8);
/* substring(0, 1).toUpperCase(): imprime la primera letra de la cadena y lo convierte a mayúscula */
console.log('--------- 9.2 ---------');
const texto9 = "dani Fhn Filth asd, asddsf"; 
const splitTexto9 = texto9.substring(0, 1).toUpperCase();
console.log(splitTexto9);

/* replace(): reemplaza un string por otro */
/* Toma una parte del texto y lo reemplaza, dando una cadena de texto nueva */
console.log('--------- 10 ---------');
const arrayReplace = 'www.texto.com?id=3';
const resultReplace = arrayReplace.replace('texto.', 'maggot-code.')
console.log(arrayReplace, 'original');
console.log(resultReplace, 'modificado');
/* --------------------- Strings ------------------------- */
