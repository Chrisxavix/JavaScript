/* ----------- Expresiones regulares ----------------- */

/* Secuencia de caracteres que forman un patrón de búsqueda */

/* Busca la expresión dentro de la cadena con la función test() para saber si existe */
/* La (g) es búsqueda global */
console.log('--------- 1 ---------');
let cadena = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis velit assumenda dolorem at autem, fugiat quia dicta sint aperiam facere accusantium nam! Enim, eum. Error, molestias soluta. Delectus, asperiores illum.";
let expReg = new RegExp("lorem", "g");
console.log(expReg.test(cadena));

/* Busca la expresión dentro de la cadena con la función test() para saber si existe */
/* La (i) ignora mayúsculas */
console.log('--------- 2 ---------');
let cadenaV1 = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis velit assumenda dolorem at autem, fugiat quia dicta sint aperiam facere accusantium nam! Enim, eum. Error, molestias soluta. Delectus, asperiores illum.";
let expRegV1 = new RegExp("lorem", "i");
console.log(expRegV1.test(cadenaV1));

/* Devuelve un arreglo con la función exec() con información de la búsqueda */
console.log('--------- 3 ---------');
let cadenaV2 = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis velit assumenda dolorem at autem, fugiat quia dicta sint aperiam facere accusantium nam! Enim, eum. Error, molestias soluta. Delectus, asperiores illum.";
let expRegV2 = new RegExp("lorem", "g");
console.log(expRegV2.exec(cadenaV2));
