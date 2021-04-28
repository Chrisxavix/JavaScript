/* Ejercicio: contar los valores de la cadena, los números no deben de contar */

let contar = 0;
const cadena = 'he is a good programmer, he won 865 competitions, but sometimes he dont. What do you think? All test-cases should pass. Done-done?';
const corteCadena = cadena.split(" ");
corteCadena.forEach(element => {
    if (!isNaN(parseInt(element, 10))) {
        contar++;
    }
})
console.log('resultado: ', corteCadena.length - contar);
