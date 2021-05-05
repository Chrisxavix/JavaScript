/* -------------- Arrow Functions ------------------- */

/* Arrow function */
/* Cuando es una sola sentencia es opcional las llaves de una función tradicional */
console.log('--------- 1 ---------');
saludar = () => console.log('Hola');
saludar();

/* Arrow function con parámetro */
console.log('--------- 2 ---------');
saludarNombre = nombre => console.log('Hola', nombre);
saludarNombre('Chris');

/* Ejemplo de uso normal con funciones */
console.log('--------- 3 ---------');
sumar = function (valor1, valor2) {
    return valor1 + valor2;
}
let result = sumar(4, 5);
console.log('La suma es:', result);

/* Funciones usando arrow */
/* Es obligado usar paréntesis para los parámetros cuando son más de dos.
La flecha indica el return. */
console.log('--------- 4 ---------');
sumarArrow = (valor1, valor2) => valor1 + valor2;
let resultArrow = sumarArrow(9, 5);
console.log('La suma es:', resultArrow);

/* Usando (.forEach) para iterar el array */
/* Ejemplo con "function" */
console.log('--------- 5 ---------');
const numeros = [1, 5, 8, 7];
numeros.forEach(function (element) {
    console.log(element)
})

/* Evadiendo "function" por "=>" */
console.log('--------- 6 ---------');
const numerosArrow = [1, 5, 8, 7];
numerosArrow.forEach((element) => {
    console.log(element)
})
