
/* Método Replace */
/* Agarra una parte del texto y lo reemplaza, dando una cadena de texto nueva */
console.log('/******** Método Replace *********/');
const arrayReplace = 'www.texto.com?id=3';
const resultReplace = arrayReplace.replace('www.', 'test.')
console.log(arrayReplace);
console.log(resultReplace);
/* Imprime:
test.texto.com?id=3 */

/* Método Map con objetos*/
/* Busca el elemento en todos los arrays, y me devuelve un array con los
elementos mapeados por el atributo esperado */
const arrayMapaObject = [
    {name: 'Chris', age: 12, lastname: 'Test01'},
    {name: 'Dani', age: 12, lastname: 'Test02'},
    {name: 'Xavi', age: 12, lastname: 'Test03'},
    {name: 'Lucas', age: 12, lastname: 'Test04'}
]
console.log('/******** Método Map con objetos *********/');
const resultMapaObject = arrayMapaObject.map(elemn => {
    return elemn.name;
})
console.log(resultMapaObject);

