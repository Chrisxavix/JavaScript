/* Para saber si un array es de tipo array, no se usa el typeof, sino Array.isArray('nombre del array') */
/* Devuelve true o false */
const arrayType = ['Madrid', 'Cuenca', 'Loja', 'Quito']
console.log('/** Comprobar si es array **/');
console.log(Array.isArray(arrayType));

/* Método POP */
/* Elimina el último elemento del array devuelve el elemento eliminado */
/* El array original se modifica */
const arrayPop = ['Madrid', 'Cuenca', 'Loja', 'Quito']
const resultPop = arrayPop.pop();
/* Elimina en el arrayTest */
console.log('/******** Método POP *********/');
console.log(arrayPop);
/* Imprime:
(3) ["Madrid", "Cuenca", "Loja"] */
console.log(resultPop);
/* Imprime: 
Quito */

/* Método Shift */
/* Eliminar el primer elemento del array y devuelve el elemento eliminado */
/* El array original se modifica */
const arrayShift = ['Madrid', 'Cuenca', 'Loja', 'Quito']
const resultShift = arrayShift.shift();
console.log('/******** Método Shift *********/');
console.log(arrayShift);
/* Imprime:
(3) ["Cuenca", "Loja", "Quito"] */
console.log(resultShift);
/* Imprime:
Madrid */

/* Método Slice */
/* Devuelve una copia de una parte del array */
/* El array original no se modifica */
const arraySlice = ['Madrid', 'Cuenca', 'Loja', 'Quito']
const resultSlice = arraySlice.slice(0, 2)
console.log('/******** Método Slice *********/');
console.log(arraySlice);
console.log(resultSlice);
/* Imprime:
["Madrid", "Cuenca"] */
/* Imprime solo dos porque el último elemento no lo toma en cuenta */

/* Método Replace */
/* Agarra una parte del texto y lo reemplaza, dando una cadena de texto nueva */
console.log('/******** Método Replace *********/');
const arrayReplace = 'www.texto.com?id=3';
const resultReplace = arrayReplace.replace('www.', 'test.')
console.log(arrayReplace);
console.log(resultReplace);
/* Imprime:
test.texto.com?id=3 */

/* Método Unshift */
/* Agrega uno o más elementos al inicio de un array y devuelve la longitud del array */
/* Mofifica el array original */
const arrayUnshift = ['Madrid', 'Cuenca', 'Loja', 'Quito']
const resultUnshift = arrayUnshift.unshift('Barcelona', 'Cordova')
console.log('/******** Método Unshift *********/');
console.log(arrayUnshift);
console.log(resultUnshift);

/* Método Splice */
/* Elimina o agrega */
const arraySplice = ['Madrid', 'Cuenca', 'Loja', 'Quito']
/* Base */
/* const resultSpliceTest = arrayUnshift.splice(start, deleteCount, item1) */
/* 1) Trae los dos primeros valores, cambia el array original */
/* arraySplice.splice(2); */
/* 2) Al poner negativo empieza desde el último */
/* arraySplice.splice(-2); */
/* 3) Elimina desde la posición declarada, inicio y final */
/* arraySplice.splice(1, 2); */
/* 4) Agrega un elemento en cierta posición */
/* arraySplice.splice(2, 0, 'Guayaquil'); */
/* 5) Eiminar un valor y reemplazar por uno nuevo */
arraySplice.splice(1, 1, 'Guayaquil');
console.log('/******** Método Splice *********/');
console.log(arraySplice);
/* Imprime:
["Loja", "Quito"] */

/* Método IndexOf */
/* Busca y devuelve el indice, si encuentra devuelva el indice, caso contrario devuelve -1 */
const arrayIndexOf = ['Madrid', 'Cuenca', 'Loja', 'Quito']
const resultIndexOf = arrayIndexOf.indexOf('Loja')
console.log('/******** Método Splice *********/');
console.log(resultIndexOf);

/* Método Includes */
/* Busca y devuelve true o false */
const arrayIncludes = ['Madrid', 'Cuenca', 'Loja', 'Quito']
const resultIncludes = arrayIncludes.includes('Cuenca')
console.log('/******** Método Includes *********/');
console.log(resultIncludes);

/* Método Filter */
/* Si encuentra devuelve el array nuevo con los valores a buscar y si no encuentra devuleve vacío */
const arrayFilter = ['Madrid', 'Cuenca', 'Loja', 'Quito']
const resultFilter = arrayFilter.filter(city => {
    return city === 'Cuenca' || city === 'Loja'
})
console.log('/******** Método Filter *********/');
console.log(resultFilter);


/* const arraySliceString = 'www.texto.com?id=3';
const resultSliceString = arraySliceString.split('?')
console.log(resultSliceString); */

