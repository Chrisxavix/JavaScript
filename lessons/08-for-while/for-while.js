/* ------------ Estructura while, for -------------- */

/* Estructura while */
/* Se repite mientras se cumpla la condición */
console.log('--------- 1 ---------');
let contador = 0;
while (contador < 10) {
    contador = contador + 1;
    console.log(contador);
}

/* Estructura for */
/* for(inicializar variable; condición, incremento) {
    sentencias de código;
} */
console.log('--------- 2 ---------');
for (let i = 0; i < 10; i++) {
    console.log('for', i)
}

/* For, imprime el array */
console.log('--------- 3 ---------');
let numeros = [10, 20, 30, 40, 50, 60, 70];
for (let i = 0; i < numeros.length; i++) {
    console.log('forArray', numeros[i])
}

/* For in, recorre el objeto e imprime el id */
console.log('--------- 4 ---------');
const objectChris = { nombre: 'Chris', apellido: 'Chillo', edad: 24 }
for (const propiedad in objectChris) {
    console.log(propiedad);
}

/* For in: recorre el objeto e imprime el id y valor */
console.log('--------- 5 ---------');
const objectChrisV1 = { nombre: 'Chris', apellido: 'Chillo', edad: 24 }
for (const propiedad in objectChrisV1) {
    console.log(`Id: ${propiedad} - Valor: ${objectChrisV1[propiedad]}`);
}

/* For of: permite recorrer todos los elementos */
console.log('--------- 6 ---------');
let numerosArray = [10, 20, 30, 40, 50, 60, 70];
for (const elemento of numerosArray) {
    console.log(elemento);
}
/* -------------- Estructura while, for -------------- */
