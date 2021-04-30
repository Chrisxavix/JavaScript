/* --------------- Arrays ----------------- */

/* Declaración de un arreglo vacío, opción 1 */
console.log('--------- 1 ---------');
const arrayNew = new Array();
console.log(arrayNew);

/* Declaración de un arreglo vacío, opción 2 */
console.log('--------- 2 ---------');
const arrayNewv1 = [];
console.log(arrayNewv1);

/* Declaración de un arreglo vacío con límite de 3*/
console.log('--------- 3 ---------');
const arrayNewv2 = Array(3)
console.log(arrayNewv2);

/* Para saber si un array es de tipo array, no se usa el typeof, sino Array.isArray('nombre del array') */
/* Devuelve true o false */
console.log('--------- 4 ---------');
const arrayType = ['Madrid', 'Cuenca', 'Loja', 'Quito']
console.log(Array.isArray(arrayType));

/* Declaración e impresión de un array */
console.log('--------- 5 ---------');
const arrayDifferent = [1, 2, 9, 12];
console.log(arrayDifferent);

/* Declaración e impresión de un array de arrays */
console.log('--------- 6 ---------');
const arrayDifferentv1 = [1, true, [1, 2, 'tres'], 'Maggot', 10];
console.log(arrayDifferentv1);

/* Declaración e impresión de una posición en el array */
console.log('--------- 7 ---------');
const arrayPosicion = [1, true, [1, 2, 'tres'], 'Maggot', 10]
console.log(arrayPosicion[1]);

/* Declaración e impresión de una posición dentro de un array del array */
console.log('--------- 8 ---------');
const arrayPosicionv1 = [1, true, [1, 2, 'tres'], 'Maggot', 10]
console.log(arrayPosicionv1[2][1]);

/* Declarar un array con límite y lo llena de un valor */
console.log('--------- 9 ---------');
const arrayLimit = Array(3).fill(false);
console.log(arrayLimit);

/* La función forEach recorre el array por cada elemento */
console.log('--------- 10 ---------');
const coloresForEach = ['rojo', 'verde', 'amarillo'];
coloresForEach.forEach(element => {
    console.log(element);
});

/* A cada valor con el recorrido forEach se le multiplica por 3 */
console.log('--------- 11 ---------');
const valoresForEach = [2, 4, 9];
valoresForEach.forEach(element => {
    console.log(element * 3);
});

/* ----------------------------------------------------------- */
/* ------------------------- MÉTODOS ------------------------- */
/* ----------------------------------------------------------- */
console.log('');
console.log('----------------');
console.log('----MÉTODOS-----');
console.log('----------------');
console.log('');

/* Método "push" */
/* Agrega valores a un array */
/* El array original se modifica */
console.log('--------- 12 ---------');
const coloresPush = ['rojo', 'verde', 'amarillo'];
console.log(coloresPush, 'original');
coloresPush.push('verde');
console.log(coloresPush, 'modificado ');

/* Método "pop" */
/* Elimina el último valor en el array y devuelve el valor eliminado */
/* El array original se modifica */
console.log('--------- 13 ---------');
const coloresPop = ['rojo', 'verde', 'amarillo']
console.log(coloresPop, 'original');
const resultPop = coloresPop.pop('verde');
console.log(resultPop, 'valor eliminado');
console.log(coloresPop, 'modificado');

/* Método "shift" */
/* Elimina el primer elemento del array y devuelve el elemento eliminado */
/* El array original se modifica */
console.log('--------- 14 ---------');
const arrayShift = ['Madrid', 'Cuenca', 'Loja', 'Quito'];
console.log(arrayShift, 'original');
const resultShift = arrayShift.shift();
console.log(resultShift, 'valor eliminado');
console.log(arrayShift, 'modificado');

/* Método "slice" */
/* Devuelve una copia de una parte del array de acuerdo a la posición slice(0, 2) */
/* El array original no se modifica */
console.log('--------- 15 ---------');
const arraySlice = ['Madrid', 'Cuenca', 'Loja', 'Quito'];
console.log(arraySlice, 'original');
const resultSlice = arraySlice.slice(0, 2)
console.log(resultSlice, 'copia');

/* Método "unshift" */
/* Agrega uno o más elementos al inicio de un array y devuelve la longitud del array */
/* Mofifica el array original */
console.log('--------- 16 ---------');
const arrayUnshift = ['Madrid', 'Cuenca', 'Loja', 'Quito'];
console.log(arrayUnshift, 'original');
const resultUnshift = arrayUnshift.unshift('Barcelona', 'Cordova');
console.log(resultUnshift, 'valor de longitud');
console.log(arrayUnshift, 'moficado');

/* Método "splice" */
/* 1) Trae los dos primeros valores */
/* Mofifica el array original */
console.log('--------- 17 ---------');
console.log('17.1 -----------------');
const arraySplicev1 = ['Madrid', 'Cuenca', 'Zamora', 'Loja', 'Quito', 'Puyo'];
console.log(arraySplicev1, 'original');
arraySplicev1.splice(2);
console.log(arraySplicev1, 'modificado');
/* 2) Al poner negativo empieza eliminando valores desde el último */
/* Mofifica el array original */
console.log('17.2 -----------------');
const arraySplicev2 = ['Madrid', 'Cuenca', 'Zamora', 'Loja', 'Quito', 'Puyo'];
console.log(arraySplicev2, 'original');
arraySplicev2.splice(-2);
console.log(arraySplicev2, 'modificado');
/* 3) Elimina desde la posición declarada, inicio y final */
/* Mofifica el array original */
console.log('17.3 -----------------');
const arraySplicev3 = ['Madrid', 'Cuenca', 'Zamora', 'Loja', 'Quito', 'Puyo'];
console.log(arraySplicev3, 'original');
arraySplicev3.splice(1, 2);
console.log(arraySplicev3, 'modificado');
/* 4) Agrega un elemento en cierta posición */
/* Mofifica el array original */
console.log('17.4 -----------------');
const arraySplicev4 = ['Madrid', 'Cuenca', 'Zamora', 'Loja', 'Quito', 'Puyo'];
console.log(arraySplicev4, 'original');
arraySplicev4.splice(2, 0, 'Guayaquil');
console.log(arraySplicev4, 'modificado');
/* 5) Eiminar un valor y reemplaza por uno nuevo */
/* Mofifica el array original */
console.log('17.5 -----------------');
const arraySplicev5 = ['Madrid', 'Cuenca', 'Zamora', 'Loja', 'Quito', 'Puyo'];
console.log(arraySplicev5, 'original');
arraySplicev5.splice(2, 1, 'Guayaquil');
console.log(arraySplicev5, 'modificado');

/* Método "indexOf" */
/* Busca y devuelve el indice, si encuentra devuelve el indice de posición, caso contrario devuelve -1 */
console.log('--------- 18 ---------');
const arrayIndexOf = ['Madrid', 'Cuenca', 'Loja', 'Quito'];
const resultIndexOf = arrayIndexOf.indexOf('Loja');
console.log(resultIndexOf);
console.log('18.1 -----------------');
/* Si encuentra el valor imprime que encontró, caso contrario no encontró */
console.log('--------- 19 ---------');
const arrayIndexOf1 = ['Madrid', 'Cuenca', 'Loja', 'Quito'];
if (arrayIndexOf1.indexOf('Lojas') > -1) {
    console.log('Encontró');
} else {
    console.log('No encontró');
}

/* Método "includes" */
/* Busca y devuelve true o false si encuentra el valor en el array */
console.log('--------- 18 ---------');
const arrayIncludes = ['Madrid', 'Cuenca', 'Loja', 'Quito'];
const resultIncludes = arrayIncludes.includes('Cuenca');
console.log(resultIncludes);

/* Método "filter" */
/* No mofifica el array original */
/* Si encuentra de acuerdo a un item del array retorna el array nuevo con los valores buscados, y si no encuentra devuelve vacío */
console.log('--------- 19 ---------');
const arrayFilter = ['Madrid', 'Cuenca', 'Loja', 'Quito'];
const resultFilter = arrayFilter.filter(city => {
    return city === 'Cuenca' || city === 'Loja';
});
console.log(resultFilter);

/* Método "find" */
/* Devuelve el elemento que cumpla una condición dada, cuando lo encuentra deja de recorrer el array, mientras que con filter recorre todo el array así haya encontrado el elemento */
console.log('--------- 20 ---------');
const arrayFind = ['Madrid', 'Cuenca', 'Loja', 'Quito'];
const resultFind = arrayFind.find((ele, index) => {
    console.log(index, 'index');
    return ele === 'Loja';
});
console.log(resultFind);

/* Método "map" */
/* Crea un nuevo array y devuelve de acuerdo a la operacíon realizada */
/* No mofifica el array original */
console.log('--------- 21 ---------');
const arrayMap = [3, 4, 5];
const resultMap = arrayMap.map(current => {
    return current + 5;
});
console.log(resultMap);
/* ------------------- Arrays ----------------- */
